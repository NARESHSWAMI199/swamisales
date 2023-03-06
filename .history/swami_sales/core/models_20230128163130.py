from django.db import models
from django.conf import settings

User = settings.AUTH_USER_MODEL

class Wholesale(models.Model):
    user = models.CharField()
    name= models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='media')


    def __str__(self):
        return self.name


class Address(models.Model):
    wholesale = models.ForeignKey(Wholesale, models.CASCADE)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    landmark = models.CharField(max_length=100)
    zip_code = models.CharField(max_length=8)


    class Meta:
        verbose_name_plural = "Addresses"

    def __str__(self):
        return self.wholesale.name





ITEM_LABELS = (
    ("N","New"),
    ("O","Old"),
    ("T","Trending")
)
    


class Item(models.Model):
    user = models.ForeignKey()
    title = models.CharField(max_length=50,blank=False, null=False)
    image = models.ImageField(upload_to='media')
    description = models.TextField()
    price = models.FloatField()
    label = models.CharField(max_length=1, choices=ITEM_LABELS)
    discount = models.FloatField(default=0)
    created = models.DateField(auto_now=True)



class Message(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    message = models.TextField()
    created = models.DateTimeField(auto_now=True)
