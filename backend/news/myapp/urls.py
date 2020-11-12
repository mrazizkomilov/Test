from django.urls import path
from .views import NewsListView, NewsDetailView, CommentListView

urlpatterns = [
    path('news', NewsListView.as_view()),
    path('news/<int:pk>', NewsDetailView.as_view()),
    path('news/<int:post>/comment', CommentListView.as_view()),
]
