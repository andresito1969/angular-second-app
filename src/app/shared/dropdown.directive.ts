import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})

export class DropDownDirective{
    @HostBinding('class.open') isOpen = false;

    private isGeneratedDropDown = false;

    @HostListener('click') mouseClick(eventData: Event) : void {
        this.isOpen = !this.isOpen;
        this.isGeneratedDropDown = true;
    }

    @HostListener('document:click') documentClick(eventData: Event): void {
        if(!this.isGeneratedDropDown) {
            this.isOpen = false;
        }
        this.isGeneratedDropDown = false;
    }
}