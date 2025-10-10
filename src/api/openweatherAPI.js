let cityData, userInput, daySelection;


const $name = $('#name')
const $temp = $('#temp')
const $feels_like = $('#feels_like')
const $weather = $('#weather')
const $input = $("input[type='text']")
const $cnt = $('#cnt')
const $select = $("select[id='forecast']")

$('form').on('submit', handleGetData);

function handleGetData(event){
    event.preventDefault();

    daySelection = $select.val();
    userInput = $input.val();

    console.log(daySelection);
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&units=imperial&appid=${config}`
                
    }).then(
        (data) => {
            cityData = data;
            render();
            $input.val('')
        },
        (error) => {
            console.long('ERROR IS',error)
        }
    )
}

function render() {
    $name.html(cityData.name)
    $temp.html(cityData.main.temp)
    $feels_like.html(cityData.main.feels_like)
    $weather.html(cityData.weather[0].description)
    $cnt.html(cityData.cnt)
}
