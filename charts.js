function loadCharts(){
    const ctx1 = document.getElementById('weekTasks');
    
    new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
        label: '# of Tasks Completed',
        data: [12, 19, 3, 5, 2, 0, 0],
        borderWidth: 1
        }]
    },
    options: {
        scales: {
        y: {
            beginAtZero: true
        }
        }
    }
    });

    const ctx2 = document.getElementById('monthTasks');

    new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: '# of Tasks Completed',
                data: [134, 156, 203, 104, 186, 156, 203, 145, 198, 174, 166, 188],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const ctx3 = document.getElementById('yearTasks');

    new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: ['2020', '2021', '2022', '2023'],
            datasets: [{
                label: '# of Tasks Completed',
                data: [2452, 3423, 4440, 963],
                borderWidth: 1
            }]
        }, 
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const ctx4 = document.getElementById('pie-chart');

    new Chart(ctx4, {
        type: 'doughnut',
        data: {
            labels: ['Completed On Time', 'Completed After Deadline', 'Not Completed'],
            datasets: [{
                data: [9565, 456, 1103],
                borderWidth: 1 
            }]
        }
    })
}