from django.core.mail import send_mail
from django.conf import settings
import logging

# Set up logging
logger = logging.getLogger(__name__)

def send_order_email(user_email, order_id, custom_message=None):
    """
    Sends an order confirmation email.
    
    :param user_email: The recipient's email address.
    :param order_id: The ID of the order.
    :param custom_message: Optional custom message (default: order confirmation).
    """
    subject = "Order Confirmation"
    message = custom_message if custom_message else f"Your order #{order_id} has been placed successfully!"
    
    from_email = getattr(settings, "DEFAULT_FROM_EMAIL", "w6550872@gmail.com")
    recipient_list = ["cloudc523@gmail.com"]

    try:
        send_mail(subject, message, from_email, recipient_list, fail_silently=False)
        logger.info(f"Email sent successfully to {user_email} for order #{order_id}.")
    except Exception as e:
        logger.error(f"Failed to send email to {user_email} for order #{order_id}. Error: {str(e)}")