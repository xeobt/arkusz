function obliczRaty() {
    const miasto = document.querySelector('select').value; 
    const liczbaRat = document.getElementById('liczba_rat').value;

    if (liczbaRat <= 0 || isNaN(liczbaRat)) {
        alert('Liczba rat musi być większa niż 0!');
        return;
    }

    let kwota = 0;

    if (document.getElementById('kurs_react').checked) {
        kwota += parseFloat(document.getElementById('kurs_react').value);
    }

    if (document.getElementById('kurs_js').checked) {
        kwota += parseFloat(document.getElementById('kurs_js').value);
    }

    if (kwota === 0) {
        alert('Wybierz przynajmniej jeden kurs!');
        return;
    }

    const rata = (kwota / liczbaRat);
    const wynik = `Kursy odbędą się w ${miasto}. Koszt całkowity: ${kwota} zł. Płacisz ${liczbaRat} rat po ${rata} zł.`;

    document.getElementById('Wynik').textContent = wynik;
}