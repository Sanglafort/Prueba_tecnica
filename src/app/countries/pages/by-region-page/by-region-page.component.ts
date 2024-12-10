import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { CountryTableComponent } from '../../components/country-table/country-table.component';
import { CommonModule } from '@angular/common';
import { Region } from '../../interfaces/region.type';

@Component({
    selector: 'app-by-regiony-page',
    imports: [CommonModule, CountryTableComponent],
    templateUrl: './by-region-page.component.html',
    styles: ``
})
export default class ByRegionyPageComponent implements OnInit{

  public countries: Country[] = []
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  public selectedRegion?: Region


  constructor( private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region
  }

  searchByRegion ( region: Region ): void {
    this.selectedRegion = region
    this.countriesService.searchRegion( region )
    .subscribe( countries => {
      this.countries = countries
    })
  }

}
