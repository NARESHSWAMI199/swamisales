from django.db import models
from django.conf import settings


STOCK_CHOICES = (
    ("A" , 'Active'),
    ("D" , 'Deactivate')
)


User = settings.AUTH_USER_MODEL

class Wholesale(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=2)
    name= models.CharField(max_length=100)
    description = models.TextField()
    rating = models.FloatField()
    image = models.ImageField(upload_to='wholesale')
    address = models.ForeignKey('Address',on_delete=models.CASCADE)
    slug = models.SlugField()
    status = models.CharField(max_length=1, choices = STOCK_CHOICES,  default='A')
    created = models.DateTimeField(auto_now=True)
    def __str__(self):
        return self.name
    class Meta:
        ordering = ['created']

class Address(models.Model):
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    landmark = models.CharField(max_length=100)
    zip_code = models.CharField(max_length=8)


    class Meta:
        verbose_name_plural = "Addresses"

    def __str__(self):
        return self.city





ITEM_LABELS = (
    ("N","New"),
    ("O","Old"),
    ("T","Trending")
)
    

STOCK_CHOICES = (
    ("N" , 'Not in stock'),
    ("Y" , 'In stock')
)

class Item(models.Model):
    wholesale = models.ForeignKey(Wholesale, models.CASCADE)
    title = models.CharField(max_length=50,blank=False, null=False)
    image = models.ImageField(upload_to='item')
    description = models.TextField(null=True,blank=True)
    price = models.FloatField()
    label = models.CharField(max_length=1, choices=ITEM_LABELS)
    discount = models.FloatField(default=0)
    rating = models.FloatField()
    in_stock = models.CharField(max_length=1,choices=STOCK_CHOICES)
    created = models.DateField(auto_now=True)


    def __str__(self):
        return self.title

 
class Message(models.Model):
    item = models.ForeignKey(Item,on_delete=models.CASCADE)
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    message = models.TextField()
    is_deleted = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now=True)


    def __str__(self):
        return self.item.title + " "+ self.message




# class Sale(models.Model):
