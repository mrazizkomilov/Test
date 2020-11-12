from django.db import models
from django.contrib.auth.models import User


class News(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField(blank=True)
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    photo = models.ImageField(upload_to='photo/%Y/%m/%d/')
    is_published = models.BooleanField(default=True)
    category = models.ForeignKey('Category',
                                 related_name='category',
                                 on_delete=models.CASCADE)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'New'
        verbose_name_plural = 'News'


class Category(models.Model):
    title = models.CharField(max_length=60, verbose_name='Category')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Categorys'
        verbose_name_plural = 'Category'


class Comment(models.Model):
    name = models.CharField(max_length=200)
    post = models.ForeignKey(News, on_delete=models.CASCADE)
    comment = models.TextField(blank=True)

    def __str__(self):
        return self.comment

    class Meta:
        verbose_name = 'Comments'
        verbose_name_plural = 'Comment'
