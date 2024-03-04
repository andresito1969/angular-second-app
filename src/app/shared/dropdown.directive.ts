import { Directive, ElementRef, Renderer2, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})

export class DropDownDirective{
    isOpenDropDown = false;
    private isGeneratedDropDown = false;

    @HostListener('click') mouseClick(eventData: Event) : void {
        this.isOpenDropDown = !this.isOpenDropDown;
        this.dropDownAction();
        this.isGeneratedDropDown = true;
        console.log("click");
    }

    @HostListener('document:click') documentClick(eventData: Event): void {
        if(!this.isGeneratedDropDown) {
            this.isOpenDropDown = false;
            this.dropDownAction();
        }
        this.isGeneratedDropDown = false;
    }
    constructor(private elRef: ElementRef, private renderer: Renderer2) { }

    private dropDownAction() : void {
        const action = this.isOpenDropDown ? 'addClass' : 'removeClass';
        this.renderer[action](this.elRef.nativeElement, 'open')
    }
}