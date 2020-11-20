import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/authentication/login/login.component';
import { FormConnectionComponent } from './components/form-connection/form-connection.component';
import { HistoryTransactionComponent } from './pages/history-transaction/history-transaction.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AmountTotalComponent } from './components/amount-total/amount-total.component';
import { TableComponent } from './components/table/table.component';
import { MenuComponent } from './components/menu/menu.component';
import { RegisterComponent } from './pages/authentication/register/register.component';
import { ChartComponent } from './components/chart/chart.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ChartAmountComponent } from './components/chart-amount/chart-amount.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    FormConnectionComponent,
    HistoryTransactionComponent,
    HeaderComponent,
    SidebarComponent,
    AmountTotalComponent,
    TableComponent,
    MenuComponent,
    RegisterComponent,
    ChartComponent,
    ChartAmountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
