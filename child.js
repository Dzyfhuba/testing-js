$(()=>{
    $('#left .card').on('click', function(){
        console.log('click');

        // get data from local Storage
        let data = JSON.parse(localStorage.getItem('data'));

        // filter data with current clicked card .h3
        let text = $(this).find('h3').text();
        // remove 'Nama: '
        text = text.substring(6);
        
        // get data with current clicked card .h3 as child with parent as value
        let child = data.filter(item => item.parent === text);

        console.log(child);

        let bg = ['bg-info', 'bg-danger', 'bg-success', 'bg-warning'];

        // remove rendered child if rendered
        $('#right .card').remove();
        
        // render child
        child.forEach(item => {
            let html = `
                <div class="card ${bg[Math.floor(Math.random() * bg.length)]}">
                    <div class="card-header">
                        <h3 class="card-title">Nama: ${item.name}</h3>
                    </div>
                    <div class="card-body">
                        <p class="card-text">Umur: ${item.age}</p>
                    </div>
                </div>
            `;
            $('#right ul').append(html);
        });

        // set #right ul width to 50% with animation
        $('#right').animate({width: '50%'}, 500);
        // set #left ul width to 50% with animation
        $('#left').animate({width: '50%'}, 500);
    });

    $('button').on('click', function(){
        console.log('click');

        // remove #right with animation delete
        $('#right').animate({width: '0%'}, 500, function(){
            $('#right ul').empty();
        });
        // set #left ul width to 100% with animation
        $('#left').animate({width: '100%'}, 500);
    });
});