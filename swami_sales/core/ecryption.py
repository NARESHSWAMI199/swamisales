from Crypto.Cipher import AES
from Crypto import Random
import base64
import random
from Crypto.Util.Padding import unpad


block_size = AES.block_size


# unpad = lambda s : s[0:-ord(s[-1])]

def pad(plain_text):
    """
    func to pad cleartext to be multiples of 8-byte blocks.
    If you want to encrypt a text message that is not multiples of 8-byte blocks, 
    the text message must be padded with additional bytes to make the text message to be multiples of 8-byte blocks.
    """
    number_of_bytes_to_pad = block_size - len(plain_text) % block_size
    ascii_string = chr(number_of_bytes_to_pad)
    padding_str = number_of_bytes_to_pad * ascii_string
    padded_plain_text = plain_text + padding_str
    return padded_plain_text



def aes_encryption(str_to_encrypt,key,iv):
    try:
        str_to_encrypt = pad(str_to_encrypt)
        cipher = AES.new(bytes(key,"utf-8"),AES.MODE_CBC, bytes(iv,"utf-8"))
        encrypted_bytes = cipher.encrypt(bytes(str_to_encrypt, "utf8"))
        encrypted_text = base64.urlsafe_b64encode(encrypted_bytes).decode("utf-8")
        return encrypted_text
    except (ValueError , KeyError) as e:
        raise e


# b64 = json.loads(json_input)
# iv = b64decode(b64['iv'])

def aes_decrypt(str_to_decrypt,key, iv):
    try :
        cipher = AES.new(bytes(key,"utf-8"), AES.MODE_CBC, bytes(iv,"utf-8"))
        pt = unpad(cipher.decrypt(str_to_decrypt), AES.block_size).decode("utf-8")
        return  pt
    except (ValueError, KeyError) as e:
        raise e


