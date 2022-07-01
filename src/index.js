import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currency-service.js';





async function makeApiCall(country, amount) {
  const response = await CurrencyService.getCurrency(country, amount);
  getCurrencyInfo(response);
}

$(document).ready(function() {
  $('#')
})