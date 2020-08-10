export interface DataModel {
    date ?: string,
    status ?: string, 
    total ?: number, 
    AN ?: number,
    AP ?: number,
    AR ?: number,
    AS ?: number,
    BR ?: number,
    CH ?: number,
    CT ?: number,
    DN ?: number,
    DD ?: number,
    DL ?: number,
    GA ?: number,
    GJ ?: number,
    HR ?: number,
    HP ?: number,
    JK ?: number,
    JH ?: number,
    KA ?: number,
    KL ?: number,
    LA ?: number,
    LD ?: number,
    MP ?: number,
    MH ?: number,
    MN ?: number,
    ML ?: number,
    MZ ?: number,
    NL ?: number,
    OR ?: number,
    PY ?: number,
    PB ?: number,
    RJ ?: number,
    SK ?: number,
    TN ?: number,
    TG ?: number,
    TR ?: number,
    UP ?: number,
    UT ?: number,
    WB ?: number,
    UN ?: number 
}

export interface FinalData{
    date ?: string,
    state ?: string , 
    confirmed ?: number , 
    deceased ?: number, 
    recovered ?:number , 
    active ?: number
}