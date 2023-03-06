from django.db import models



class Wholesale(models.Model):
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
    title = models.CharField(max_length=50)
    description = models.TextField()
    price = models.FloatField()
    label = models.CharField()


