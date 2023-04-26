from django.urls import path, re_path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    re_path(r'^get_text_summary/$', views.get_text_sum, name='get_text_sum'),
]