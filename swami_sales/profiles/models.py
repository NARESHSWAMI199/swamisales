from django.db import models
from django.conf import settings
from django.db.models.signals import post_save

# Create your models here.
User = settings.AUTH_USER_MODEL

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    image = models.ImageField(default='media/user.png',upload_to='media')
    bio = models.TextField()
    mobile = models.CharField(max_length=12)
    followers = models.ManyToManyField(User,related_name="following")
    status = models.CharField(max_length=1, default='A')
    created = models.DateTimeField(auto_now=True)



    def __str__(self):
        return self.user.username


def profile_did_save(sender,instance,created,*args,**kwags):
    if created:
        Profile.objects.get_or_create(user=instance)

post_save.connect(profile_did_save,sender=User)