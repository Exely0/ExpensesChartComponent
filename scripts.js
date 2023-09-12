// Données JSON
const data = [
    { "day": "mon", "amount": 17.45 },
    { "day": "tue", "amount": 34.91 },
    { "day": "wed", "amount": 52.36 },
    { "day": "thu", "amount": 31.07 },
    { "day": "fri", "amount": 23.39 },
    { "day": "sat", "amount": 43.28 },
    { "day": "sun", "amount": 25.48 }
];

// Extraire les jours et les montants
const joursSemaine = data.map(item => item.day);
const depenses = data.map(item => item.amount);

// Trouver l'indice du jour avec la dépense la plus élevée
const indiceMaxDepense = depenses.indexOf(Math.max(...depenses));

// Créer un tableau de couleurs avec des barres oranges par défaut
const couleurs = Array(data.length).fill('orange');

// Définir la couleur bleue pour la barre la plus élevée
couleurs[indiceMaxDepense] = 'blue';

// ...

// ...

// Récupérer le contexte du canvas
const ctx = document.getElementById('graph').getContext('2d');

// Créer le graphique en barres avec des couleurs personnalisées
const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: joursSemaine,
        datasets: [{
            label: 'Dépenses par jour',
            data: depenses,
            backgroundColor: couleurs,
            barHoverBackgroundColor: 'red',
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false
            },
            annotation: {
                drawTime: 'beforeDatasetsDraw',
                annotations: {
                    hoverBar: {
                        type: 'line',
                        mode: 'vertical',
                        scaleID: 'x',
                        value: '',
                        borderColor: 'blue',
                        borderWidth: 2,
                        label: {
                            enabled: true,
                            content: '',
                            position: 'top',
                        },
                    },
                },
            },
        },       
    },
});

