from django.contrib import admin
from .models import News, Comment, Category


class NewsAdmin(admin.ModelAdmin):
    list_display = [
        'title', 'content', 'description', 'created_at', 'photo',
        'is_published', 'category'
    ]


admin.site.register(News, NewsAdmin)


class CategoryAdmin(admin.ModelAdmin):
    list_display = [
        'title',
    ]


admin.site.register(Category, CategoryAdmin)


class CommentAdmin(admin.ModelAdmin):
    list_display = ['name', 'post', 'comment']


admin.site.register(Comment, CommentAdmin)
