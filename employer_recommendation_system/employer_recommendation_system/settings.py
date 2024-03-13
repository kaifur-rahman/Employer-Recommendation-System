"""
Django settings for employer_recommendation_system project.

Generated by 'django-admin startproject' using Django 3.1.7.

For more information on this file, see
https://docs.djangoproject.com/en/3.1/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.1/ref/settings/
"""
from .config import *
from pathlib import Path
import os
from django.contrib.messages import constants as messages
from datetime import timedelta
# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = SECRET_KEY

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True
# DEBUG = False

ALLOWED_HOSTS = ['*']


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django_filters',
    'django_crontab',
    'emp',
    'accounts',
    'crispy_forms',
    'moodle',
    'spoken',
    'ckeditor',
    'events',
    'rest_framework',
    'corsheaders',
    'utilities',
    'rest_framework_simplejwt.token_blacklist',
    'rest_framework_simplejwt',
    'crispy_bootstrap4',
    # 'debug_toolbar',
    'silk',

]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'silk.middleware.SilkyMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    
    # 'debug_toolbar.middleware.DebugToolbarMiddleware',
]

ROOT_URLCONF = 'employer_recommendation_system.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'emp.context_processors.student_context_processor'
            ],
        },
    },
]

WSGI_APPLICATION = 'employer_recommendation_system.wsgi.application'


# Database
# https://docs.djangoproject.com/en/3.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': DB,
        'USER': DB_USER,
        'PASSWORD': DB_PASS,
        'HOST':'127.0.0.1',
        'PORT':'',
    },

    'spk': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': SPOKEN_DB,
        'USER': SPOKEN_DB_USER,
        'PASSWORD': SPOKEN_DB_PASS,
        'HOST': SPOKEN_DB_HOST,
        'PORT':'',
    },

    'moodle': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': MDB,
        'USER': MDB_USER,
        'PASSWORD': MDB_PASS,
        'HOST': MDB_HOST,
        'PORT':'',
    },

    'OPTIONS': {
         "init_command": "SET foreign_key_checks = 0;",
    },
}


# Password validation
# https://docs.djangoproject.com/en/3.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.1/howto/static-files/

STATIC_URL = '/static/'
#STATIC_ROOT=os.path.join(BASE_DIR,'static') # uncomment while deploying
STATICFILES_DIRS=[os.path.join(BASE_DIR,'static')] # comment while deploying
# MEDIA_ROOT=os.path.join(BASE_DIR, 'static/images')
MEDIA_ROOT=os.path.join(BASE_DIR, 'media')
MEDIA_URL = '/media/'
# MEDIA_URL = ''
# MEDIA_URL = '/static/images/'
STUDENT_PROFILE_PIC='profile'
#Define ROLE Constants
ROLE_NAME = {
    'MANAGER':'MANAGER','STUDENT':'MANAGER','EMPLOYER_ROLE':'employer'
}
ROLE_ID = { 'MANAGER': 1,'STUDENT':2,'EMPLOYER':3}
ROLES = {'MANAGER':(1,'MANAGER'),'STUDENT':(2,'STUDENT'),'EMPLOYER':(3,'EMPLOYER')}
CRISPY_TEMPLATE_PACK = 'bootstrap4'
MESSAGE_TAGS = {
    messages.DEBUG: 'alert-info',
    messages.INFO: 'alert-info',
    messages.SUCCESS: 'alert-success',
    messages.WARNING: 'alert-warning',
    messages.ERROR: 'alert-danger',
    # messages.DANGER: 'alert-danger',
    #messages.ERROR: 'danger',
}
LOGIN_URL='/login/'

DATABASE_ROUTERS = [
    'spoken.router.SpokenRouter',
    'moodle.router.MdlRouter'
]

AUTHENTICATION_BACKENDS = (
    'spoken.backends.SpokenStudentBackend',
    'django.contrib.auth.backends.ModelBackend'
)

PASSWORD_HASHERS = (
    'django.contrib.auth.hashers.UnsaltedMD5PasswordHasher',
    'django.contrib.auth.hashers.PBKDF2PasswordHasher',
    'django.contrib.auth.hashers.PBKDF2SHA1PasswordHasher',
    'django.contrib.auth.hashers.BCryptSHA256PasswordHasher',
    'django.contrib.auth.hashers.BCryptPasswordHasher',
    'django.contrib.auth.hashers.SHA1PasswordHasher',
    'django.contrib.auth.hashers.MD5PasswordHasher',
    'django.contrib.auth.hashers.CryptPasswordHasher',
)


DBBACKUP_STORAGE = 'django.core.files.storage.FileSystemStorage'
DBBACKUP_STORAGE_OPTIONS = {'location': os.path.join(BASE_DIR,'backup')}
CRON_LOG=os.path.join(BASE_DIR,'backup.log')
CRONJOBS=[('*/1 * * * *', 'emp.cron.backup_closed_jobs','>> ~/cron_job.log')]

MASS_MAIL=MASS_MAIL
GRADE_FILTER=GRADE_FILTER
MASS_MAIL_PAGE=MASS_MAIL_PAGE

X_FRAME_OPTIONS = 'SAMEORIGIN'
# second shortlist email setting
LOG_LOCATION = os.path.join('emp','email_logs')
EMAIL_LOG_FILE = os.path.join(BASE_DIR, LOG_LOCATION)

# EMAIL_LOG_FILE = os.path.join(BASE_DIR, 'emp','email_logs')
ADMINISTRATOR_EMAIL = ADMINISTRATOR_EMAIL
BASE_URL = BASE_URL 
GALLERY_IMAGES=GALLERY_IMAGES
GALLERY_TESTIMONIAL = GALLERY_TESTIMONIAL
CONTACT_MAIL = CONTACT_MAIL

PASS_GRADE=PASS_GRADE

# CORS settings
CORS_ALLOW_ALL_ORIGINS = True  # Set to True to allow all origins, use responsibly in development
# CORS_ALLOW_CREDENTIALS = True  # Set to True if you need to allow credentials (e.g., cookies)
# CORS_ALLOWED_ORIGINS = [
#     'http://localhost:3000',  # Add the origins (domains) allowed to access your API
#     # Add more origins as needed
# ]

# You can configure other CORS options as needed, e.g., headers, methods, etc.
# For example:
CORS_ALLOW_METHODS = [
    'GET',
    'POST',
    'PUT',
    'PATCH',
    'DELETE',
    'OPTIONS',
]

CORS_ALLOW_HEADERS = [
    'Content-Type',
    'Authorization',
    # Add other headers as needed
]

CACHES = {
    'default': {
        'BACKEND': 'django.core.cache.backends.db.DatabaseCache',
        'LOCATION': 'cache_email_otp',  # Specify your cache table name
    }
}

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
    # 'DEFAULT_FILTER_BACKENDS': ['django_filters.rest_framework.DjangoFilterBackend']
}
# Simple JWT configuration
SIMPLE_JWT = {
     "ACCESS_TOKEN_LIFETIME": timedelta(minutes=5),
    "REFRESH_TOKEN_LIFETIME": timedelta(days=1),
    "ROTATE_REFRESH_TOKENS": True,
    "BLACKLIST_AFTER_ROTATION": True,
}

# if DEBUG:
#     DEBUG_TOOLBAR_CONFIG = {
#         'SHOW_TOOLBAR_CALLBACK': lambda request: DEBUG,
#     }

if DEBUG:
    SILKY_PYTHON_PROFILER = True

MOODLE_PASSWORD_SALT=MOODLE_PASSWORD_SALT