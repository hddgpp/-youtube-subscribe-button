const subscribe = document.querySelector('.js-subscribe')
        const storSub = JSON.parse(localStorage.getItem('sub'))

        if (storSub) {
            subscribe.textContent = storSub
            if(storSub === 'subscribed') {
                subscribe.classList.add('css-subscribed')
            }
        }

        subscribe.addEventListener('click', () => {
            const isSubscribe = subscribe.textContent 
            
            if(isSubscribe === 'subscribe') {
                subscribe.textContent = 'subscribed'
                subscribe.classList.add('css-subscribed')

             } else {
                subscribe.textContent = 'subscribe'
                 subscribe.classList.remove('css-subscribed')
             }
            
            localStorage.setItem('sub', JSON.stringify(subscribe.textContent))
        }

        )