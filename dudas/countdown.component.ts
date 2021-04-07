@Component({
    selector: 'app-countdown'
})
export class CountdownComponent implements OnInit {

    @Input() segundos: number;

    resultado: string;

    constructor() {

    }

    ngOnInit() {
        this.calculo();
    }

    calculo() {
        const horas = this.segundos / (60 * 60);
        this.resultado = `Horas: ${horas}....`;
    }

}

/**
 * HTML COMPONENTE
 *
 * <p>{{ resultado }}</p>
 */

/**
<input type="text">
<button (click)="onClick()">PULSA</button>
<app-countdown segundos="3600"></app-countdown>
<app-countdown segundos="180"></app-countdown>
<app-countdown segundos="345"></app-countdown>
<app-countdown segundos="1"></app-countdown>
*/