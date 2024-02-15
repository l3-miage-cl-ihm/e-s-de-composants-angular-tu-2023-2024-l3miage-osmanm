export type Unit = 'px' | '%';
export interface CssStyle {
    readonly backgroundColor: string;
    readonly borderColor: string;
    readonly borderRadius: `${number}${Unit}`;
}

export const defaultStyle: CssStyle = {
    backgroundColor: '#ffffff',
    borderColor: '#000000',
    borderRadius: '10px'
};
