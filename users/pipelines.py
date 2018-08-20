from users.models import UserProfile
# def get_avatar(backend, response, strategy,
#                details, user=None, *args, **kwargs):
#     """
#     get_avatar este es una funcion o pipeline,
#     la cual su objetivo es obtener la foto de
#     perfil del usuario logueado por las trees
#     redes sociales usadas en este proyecto.
#     los parametros que usamos van ligados
#      a la libreria python social auth
#     para mas informacion consular en su documentacion.
#     """
#     url = None
#     if backend.name == 'facebook':
#         url = 'https://graph.facebook.com/{0}/picture?type=large'.format(
#             response['id'])
#     elif backend.name == 'google-oauth2':
#         link = response['image'].get('url',)
#         url = link.replace('?sz=50', '')
#     elif backend.name == 'twitter':
#         url = response.get('profile_image_url', '').replace('_normal', '')
#     if url:
#         print("hola {0}".format(response))
#         user.save()




def user_details(backend, response, strategy,
                 details, user=None, *args, **kwargs):
    """Update user details using data from provider."""
    if user and kwargs['is_new']:

        changed = False  # flag to track changes
        protected = ('username', 'id', 'pk', 'email') + \
            tuple(strategy.setting('PROTECTED_USER_FIELDS', []))
        # Update user model attributes with the new data sent by the current
        # provider. Update on some attributes is disabled by default, for
        # example username and id fields. It's also possible to disable update
        # on fields defined in SOCIAL_AUTH_PROTECTED_FIELDS.
        for name, value in details.items():
            if value and hasattr(user, name):
                # Check https://github.com/omab/python-social-auth/issues/671
                current_value = getattr(user, name, None)
                if not current_value or name not in protected:
                    changed |= current_value != value
                    setattr(user, name, value)

        if changed:
            strategy.storage.user.changed(user)