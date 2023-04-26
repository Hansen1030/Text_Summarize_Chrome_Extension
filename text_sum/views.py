from django.shortcuts import render

# Create your views here.
import json, sys
from django.contrib.auth.models import User #####
from django.http import JsonResponse , HttpResponse ####
#from .. import abs_text_sum
sys.path.append('/Users/hansenliu/Desktop/mysite/abs_text_sum.py')
from abs_text_sum import abs_text_sum


def index(request):
    return HttpResponse("Hello, world. You're at the text_sum index.")

def get_text_sum(request):
    text_ = request.GET.get('topic', None)
    text = '"""' + text_ + '"""'
    print('text:', text)
    data = {
        'summary': abs_text_sum(text),
    }

    print('summary to be sent: ', data)

    return JsonResponse(data)