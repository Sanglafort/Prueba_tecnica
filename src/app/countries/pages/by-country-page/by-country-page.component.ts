import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { CountryTableComponent } from '../../components/country-table/country-table.component';

@Component({
    selector: 'app-by-country-page',
    imports: [SearchBoxComponent, CountryTableComponent],
    templateUrl: './by-country-page.component.html',
    styles: ``
})
export default class ByCountryPageComponent implements OnInit{

  public countries: Country[] = []
  public initialValue: string = ''

  constructor( private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries
    this.initialValue = this.countriesService.cacheStore.byCountries.term
  }

  searchByCountry ( term: string ): void {
    this.countriesService.searchCountry( term )
    .subscribe( countries => {
      this.countries = countries
    })
  }

}
