$(()=>{
    console.log('script.js loaded');
    // get data from local Storage
    let data = JSON.parse(localStorage.getItem('data'));

    let bg = ['bg-info', 'bg-danger', 'bg-success', 'bg-warning'];

    // filter data without parent
    let parent = data.filter(item => item.parent === '');
    
    // render parent
    parent.forEach(item => {
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
        $('#left ul').append(html);
    });
})