from django.shortcuts import render

from django.contrib.auth.models import User
from .models import *
from .serializers import *
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework import status
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token


class NewsListView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        queryset = News.objects.all()
        serializer = NewsSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = NewsSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, 201)


class NewsDetailView(APIView):
    permission_classes = [AllowAny]
    global x

    def get(self, request, pk):
        x = pk
        instance = get_object_or_404(News, id=pk)
        data = NewsSerializer(instance).data
        return Response(data)

    def delete(self, request, pk):
        instance = get_object_or_404(News, id=pk)
        instance.delete()
        return Response({}, 204)

    def put(self, request, pk):
        instance = get_object_or_404(News, id=pk)
        serializer = NewsSerializer(instance, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


class CommentListView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, post):
        queryset = Comment.objects.all().filter(post=post)
        serializer = CommentSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, post):
        serializer = CommentSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, 201)
