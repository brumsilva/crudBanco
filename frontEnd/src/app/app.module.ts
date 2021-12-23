import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TransacoesComponent } from './transacoes/transacoes.component';
import { TransacoesFormComponent } from './transacoes-form/transacoes-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransacoesService } from 'src/service/transacoes.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TransacoesComponent,
    TransacoesFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TransacoesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
