import { Component, OnInit } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { CountryTableComponent } from '../../components/country-table/country-table.component';

@Component({
    selector: 'app-by-capital-page',
    imports: [SearchBoxComponent, CountryTableComponent],
    templateUrl: './by-capital-page.component.html'
})
export default class ByCapitalPageComponent implements OnInit {

  public countries: Country[] = []
  public initialValue: string = ''

  constructor( private countriesService: CountriesService ) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries
    this.initialValue = this.countriesService.cacheStore.byCapital.term
  }

  searchByCapital ( term: string ): void {

    this.countriesService.searchCapital( term )
    .subscribe( countries => {
      this.countries = countries
    })
  }

}
