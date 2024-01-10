const moviesList = [
    { movieName: "Flash", price: 7 },
    { movieName: "Spiderman", price: 5 },
    { movieName: "Batman", price: 4 },
];

const selectMovie = document.querySelector('#selectMovie');
const movieName = document.querySelector('#movieName');
const moviePrice = document.querySelector('#moviePrice');
const seats = document.querySelectorAll(`.seat`);
const numberOfSeat = document.querySelector('#numberOfSeat');
const proceedBtn = document.querySelector(`#proceedBtn`);
const cancelBtn = document.querySelector('#cancelBtn');
const totalPrice = document.querySelector('#totalPrice');
const noSelected = document.querySelector('.noSelected');

let seatCount = 0;

moviesList.forEach((movie) => {
    const option = document.createElement('option');
    option.value = movie.movieName;
    option.text = `${movie.movieName} $${movie.price}`;
    selectMovie.appendChild(option);
});

selectMovie.addEventListener('change', () => {
    const selectedMovie = moviesList.find(movie => movie.movieName === selectMovie.value);
    if (selectedMovie) {
        movieName.textContent = selectedMovie.movieName;
        moviePrice.textContent = `$ ${selectedMovie.price}`;
        updateTotalPrice(selectedMovie.price);
    }
});

for (let i = 0; i < seats.length; i++) {
    const seat = seats[i];
    seat.addEventListener('click', () => {
        if (!seat.classList.contains('occupied')) {
            if (!seat.classList.contains('selected')) {
                seat.classList.add('selected');
                seatCount++;
                numberOfSeat.textContent = `${seatCount}`;

                const selectedMovie = moviesList.find(movie => movie.movieName === selectMovie.value);
                if (selectedMovie) {
                    let totalTicketPrice = selectedMovie.price * seatCount;
                    totalPrice.textContent = `$${totalTicketPrice}`;
                    noSelected.classList.add('selectedSeat');
                    noSelected.textContent = i + 1;
                }
            }
        }
    });
}

proceedBtn.addEventListener('click', () => {
    let isMovieSelect = false;
    seats.forEach(seat => {
        if (seat.classList.contains('selected')) {
            seat.classList.remove('seatLegend');
            seat.classList.remove('selected');
            seat.classList.add('occupied');
            numberOfSeat.textContent = 0;
            totalPrice.textContent = `$ ${0}`;
            seatCount = 0;
            isMovieSelect = true;
        }
    });

    if (!isMovieSelect) {
        alert(`Oops no seat Selected`);
    } else {
        alert(`Yayy! Your Seats has been booked`);
    }

});

cancelBtn.addEventListener('click', () => {
    seats.forEach(seat => {
        if (seat.classList.contains('selected')) {
            seat.classList.remove('selected');
            seat.classList.add('seatLegend');
            totalPrice.textContent = `$ ${0}`;
            noSelected.classList.remove('selectedSeat');
            noSelected.textContent = 'No Seat Selected';
            numberOfSeat.textContent = 0;
            seatCount = 0;
        }
    });
});