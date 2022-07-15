const wbm = require('wbm');

wbm.start().then(async () => {
        for (var i = 0; i < 3; i++) {
                const phones = ['+xxxxxxxxxx'];
                const message = 'Good Morning.';
                await wbm.send(phones, message);
                
        }
        await wbm.end();
}).catch(err => console.log(err));

