export interface SubMenuItem {
    title: string;
    items?: SubMenuItem[];
    parent?: SubMenuItem;
}

export const productMenu: SubMenuItem[] = [
    {
        title: "TAKIM TUTUCULAR",
        items: [
            {
                title: "TENDO HİDROLİK TAKIM TUTUCULAR",
                items: [
                    { title: "TENDO E Compact" },
                    { title: "TENDO Silver" },
                    { title: "Tendo Slim 4ax" },
                    { title: "Tendo Platinum" },
                    { title: "Tendo Zero" },
                    { title: "Tendo LSS" },
                    { title: "Tendo RLA" },
                    { title: "TENDO Turn" },
                    { title: "TENDO WZS" },
                    { title: "iTendo²" },
                ],
            },
            {
                title: "Tribos",
                items: [
                    { title: "TRIBOS-R" },
                    { title: "TRIBOS-S" },
                    { title: "TRIBOS-RM" },
                    { title: "TRIBOS Mini" },
                ],
            },
            { title: "SINO-R" },
            {
                title: "Mekanik Takım Tutucular",
                items: [
                    { title: "CELSİO - SHRİNK TAKIM TUTUCULAR" },
                    { title: "ER PENSLİ TAKIM TUTUCULAR" },
                    { title: "WELDON" },
                    { title: "Tarama Malafa Tutucular" },
                ],
            },
        ],
    },
    {
        title: "VERO-S HIZLI PALET DEĞİŞTİRME SİSTEMİ",
        items: [
            {
                title:
                    "GENEL FREZELEME UYGULAMALARI VE AĞIR KESME İÇİN HIZLI DEĞİŞİM PALET SİSTEMİ: VERO-S NSE3 VE NSE PLUS",
            },
            {
                title:
                    "Otomatik Yükleme ve Boşaltma için Hızlı Değişim Palet Sistemleri:",
                items: [
                    { title: "VERO-S NSL3 150 – 200 – 400 HAZIR MODÜLLER" },
                    {
                        title:
                            "NSL3 TURN  - DİK veya Yatay Tornalarda Kullanılan Zero Pointler",
                    },
                    { title: "VERO-S PİMLERİ" },
                ],
            },
            { title: "WDM 5X" },
        ],
    },
    {
        title: "TORNA AYNALARI",
        items: [
            {
                title: "Mekanik Torna Aynaları",
                items: [
                    { title: "ROTA-S plus 2.0" },
                    { title: "ROTA-M flex 2+2" },
                    { title: "ROTA-S flex" },
                ],
            },
            {
                title: "Hidrolik Torna Aynaları",
                items: [
                    { title: "ROTA THW3" },
                    { title: "ROTA NC plus 2" },
                    { title: "ROTA NCF plus 2" },
                    { title: "ROTA NCE" },
                    { title: "ROTA NCO" },
                    { title: "ROTA NCR-A" },
                    { title: "ROTA 2B" },
                ],
            },
            {
                title: "Pnomatik Torna Aynaları",
                items: [{ title: "ROTA TP" }],
            },
            { title: "THL plus ARA YATAK LÜNETLER" },
        ],
    },
    {
        title: "Kuvvet Blokları",
        items: [
            { title: "TANDEM KSP3" },
            { title: "TANDEM KSH3" },
            { title: "TANDEM KSF3" },
            { title: "Tandem KRP" },
        ],
    },
    {
        title: "Mengeneler",
        items: [
            { title: "KSC3" },
            { title: "KSG MENGENE" },
            { title: "KSC-F MENGENE" },
            { title: "KSX MENGENE" },
            { title: "KSX-C2" },
            { title: "KSC3-K" },
            { title: "KSC mini" },
            { title: "KSC-D" },
            { title: "KSM2" },
        ],
    },
    {
        title: "Kuleler",
        items: [{ title: "TOMBSTONES" }, { title: "VERO-S TOMBSTONES" }],
    },
    {
        title: "Manyetik Tablalar",
        items: [
            { title: "KARE KUTUPLU MANYETİK TABLA" },
            { title: "TAŞLAMA MANYETİĞİ" },
            { title: "KALDIRAÇ" },
            { title: "SPEEDY BAT" },
            { title: "TEL EREZYON MANYETİĞİ" },
            { title: "KONTROL ÜNİTESİ" },
        ],
    },
    {
        title: "Vakum Tabla",
        items: [{ title: "VAKUM TABLA" }],
    },
    {
        title: "Çapak Alma",
    },
    {
        title: "Otomatik",
        items: [{ title: "RC2" }],
    },
];