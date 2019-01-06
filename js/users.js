/**
 * Get the value of a querystring
 * @param  {String} field The field to get the value of
 * @param  {String} url   The URL to get the value from (optional)
 * @return {String}       The field value
 */
    function getQueryString( field, url ) {
        const href = url ? url : window.location.href;
        const reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
        const string = reg.exec(href);
        return string ? string[1] : null;
    };

    // Activate the user
    async function activateUser() {
              const userKey = getQueryString('user'); // returns '<userKey>'
              if (!userKey)
                  return;

              const path = 'https://ixinhub.com:8061';
              const res = await fetch(path + '/auth/local/t-activateUser', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        userKey,
                    }),
                    credentials: 'include',
              })
              const body = await res.json()
              if (body.status === 'error') {
                  alert(body.message)
                  return
              }
              alert(body.message);
          }

