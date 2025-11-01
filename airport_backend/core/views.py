from rest_framework import viewsets, filters
from .models import Flight, Passenger, Booking
from .serializers import FlightSerializer, PassengerSerializer, BookingSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response



class FlightViewSet(viewsets.ModelViewSet):
    queryset = Flight.objects.all().order_by('departure_time')
    serializer_class = FlightSerializer
    filter_backends = (filters.SearchFilter,)
    search_fields = ["flight_number","origin","destination"]




class PassengerViewSet(viewsets.ModelViewSet):
    queryset = Passenger.objects.all()
    serializer_class = PassengerSerializer
    filter_backends = (filters.SearchFilter,)
    search_fields = ["name","passenger_number"]




class BookingViewSet(viewsets.ModelViewSet):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    filter_backends = (filters.SearchFilter,)
    search_fields = ["flight__flight_number","passenger__name"]



@api_view(['GET'])
def dashboard_stats(request):
    from django.db.models import Count

    data = {
        'total_flight' : Flight.objects.count(),
        'canceled' : Flight.objects.filter(status='cancelled').count(),
        'upcoming' : Flight.objects.filter(status='scheduled').count(),
        'bookings' : Booking.objects.count(),
    }

    return Response(data)