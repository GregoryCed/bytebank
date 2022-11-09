import { Component, EventEmitter, Output } from "@angular/core";


@Component({
  selector:'app-nova-transferencia',
  templateUrl:'./nova-transferencia.component.html',
  styleUrls:['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent{

  @Output() aoTranferir = new EventEmitter <any>();
  @Output() valoresComErro = new EventEmitter<string>();

  valor: number;
  destino: number;

  transferir(){
    console.log('Solicitada nova transferência');
    if(this.ehValido()){
      const valorEmitir = {valor: this.valor, destino: this.destino};
      this.aoTranferir.emit(valorEmitir);
    }
    this.limparCampos();
  }

  limparCampos(){
    this.valor = null;
    this.destino = null;
  }

  ehValido(){
    const valido = (this.valor != null) && (this.destino != null);
    if(!valido){
      this.valoresComErro.emit('Informe um valor válido');
    }
    return valido;
  }
}
