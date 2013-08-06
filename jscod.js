$(document).on("ready", iniciar);
$(document).on("ready", inicio);
$(document).on("ready", OcultarInfo)

function inicio()
{
	$("#inicio").on("click", iniciar);
	$("#inicio").on("click", OcultarInfo);
	$("#objetivos").on("click", object);
	$("#objetivos").on("click", OcultarInfo);
	$("#directivos").on("click", direct);
	$("#directivos").on("click", OcultarInfo);
	$("#quienes_somos").on("click", quien_Es);
	$("#quienes_somos").on("click", OcultarInfo);
	$("#corresponsables").on("click", corresp);
	$("#corresponsables").on("click", OcultarInfo);
	$("#asociados").on("click", asoc);
	$("#asociados").on("click", OcultarInfo);
	$("#normas").on("click", norm);
	$("#normas").on("click", OcultarInfo);
	$("#contacto").on("click", cont);
	$("#contacto").on("click", OcultarInfo);
}

function iniciar()
{
	$("#objetivos_seccion, #directivos_seccion_1, #directivos_seccion_2, #directivos_seccion_3, #directivos_seccion_4, #quienes_somos_seccion, #normas_seccion, #contacto_seccion, #corresponsables_seccion, #asociados_seccion, #corresponsables_info, #asociados_info").hide();
	$("#bienvenidos, #nuevo_miembro").fadeIn();
	//$("#nuevo_miembro").toggle();
}

function OcultarInfo()
{
	$("#villa_sandoval_corr_info, #espinoza_vega_corr_info, #zamora_camacho_corr_info, #moreno_medina_corr_info, #cabanillas_garcia_corr_info, #salazar_lindoro_corr_info, #quinones_galvez_corr_info, #orozco_del_valle_corr_info, #aguilar_mejia_corr_info, #blanco_rodriguez_corr_info, #zuniga_cardenas_corr_info, #osuna_sanchez_corr_info, #osako_peraza_corr_info, #olmeda_beltran_corr_info, #navarro_corr_info, #beltran_rea_corr_info").hide();
	$("#villa_sandoval_Asoc_info, #espinoza_vega_Asoc_info, #zamora_camacho_Asoc_info, #moreno_medina_Asoc_info, #cabanillas_garcia_Asoc_info, #salazar_lindoro_Asoc_info, #quinones_galvez_Asoc_info, #aguilar_mejia_Asoc_info, #blanco_rodriguez_Asoc_info, #zuniga_cardenas_Asoc_info, #osuna_sanchez_Asoc_info, #osako_peraza_Asoc_info, #olmeda_beltran_Asoc_info, #navarro_Asoc_info, #beltran_rea_Asoc_info, #villela_beltran_Asoc_info, #sanchez_Asoc_info").hide();
}

function object()
{
	$("#bienvenidos, #nuevo_miembro, #directivos_seccion_1, #directivos_seccion_2, #directivos_seccion_3, #directivos_seccion_4, #quienes_somos_seccion, #normas_seccion, #contacto_seccion, #corresponsables_seccion, #asociados_seccion, #corresponsables_info, #asociados_info").hide();
	$("#objetivos_seccion").fadeIn();
}

function direct()
{
	$("#bienvenidos, #nuevo_miembro, #objetivos_seccion, #quienes_somos_seccion, #normas_seccion, #contacto_seccion, #corresponsables_seccion, #asociados_seccion, #corresponsables_info, #asociados_info").hide();
	$("#directivos_seccion_1, #directivos_seccion_2, #directivos_seccion_3, #directivos_seccion_4").fadeIn();
}

function quien_Es()
{
	$("#bienvenidos, #nuevo_miembro, #objetivos_seccion, #directivos_seccion_1, #directivos_seccion_2, #directivos_seccion_3, #directivos_seccion_4, #normas_seccion, #contacto_seccion, #corresponsables_seccion, #asociados_seccion, #corresponsables_info, #asociados_info").hide();
	$("#quienes_somos_seccion").fadeIn();
}

function corresp()
{
	$("#bienvenidos, #nuevo_miembro, #objetivos_seccion, #directivos_seccion_1, #directivos_seccion_2, #directivos_seccion_3, #directivos_seccion_4, #normas_seccion, #quienes_somos_seccion, #contacto_seccion, #asociados_seccion, #asociados_info").hide();
	$("#corresponsables_seccion, #corresponsables_info").fadeIn();
	$("#villa_sandoval_corr").on("click", VillaSandovalCorr);
	$("#espinoza_vega_corr").on("click", EspinozaVegaCorr);
	$("#zamora_camacho_corr").on("click", ZamoraCamachoCorr);
	$("#moreno_medina_corr").on("click", MorenoMedinaCorr);
	$("#cabanillas_garcia_corr").on("click", CabanillasGarciaCorr);
	$("#salazar_lindoro_corr").on("click", SalazarLindoroCorr);
	$("#quinones_galvez_corr").on("click", QuinonesGalvezCorr);
	$("#orozco_del_valle_corr").on("click", OrozcoDelValleCorr);
	$("#aguilar_mejia_corr").on("click", AguilarMejiaCorr);
	$("#blanco_rodriguez_corr").on("click", BlancoRodriguezCorr);
	$("#zuniga_cardenas_corr").on("click", ZunigaCardenasCorr);
	$("#osuna_sanchez_corr").on("click", OsunaSanchezCorr);
	$("#osako_peraza_corr").on("click", OsakoPerazaCorr);
	$("#olmeda_beltran_corr").on("click", OlmedaBeltranCorr);
	$("#navarro_corr").on("click", NavarroCorr);
	$("#beltran_rea_corr").on("click", BeltranReaCorr);
}

function asoc()
{
	$("#bienvenidos, #nuevo_miembro, #objetivos_seccion, #directivos_seccion_1, #directivos_seccion_2, #directivos_seccion_3, #directivos_seccion_4, #normas_seccion, #quienes_somos_seccion, #contacto_seccion, #corresponsables_seccion, #corresponsables_info").hide();
	$("#asociados_seccion, #asociados_info").fadeIn();
	$("#villa_sandoval_asoc").on("click", VillaSandovalAsoc);
	$("#espinoza_vega_asoc").on("click", EspinozaVegaAsoc);
	$("#zamora_camacho_asoc").on("click", ZamoraCamachoAsoc);
	$("#moreno_medina_asoc").on("click", MorenoMedinaAsoc);
	$("#cabanillas_garcia_asoc").on("click", CabanillasGarciaAsoc);
	$("#salazar_lindoro_asoc").on("click", SalazarLindoroAsoc);
	$("#quinones_galvez_asoc").on("click", QuinonesGalvezAsoc);
	$("#aguilar_mejia_asoc").on("click", AguilarMejiaAsoc);
	$("#blanco_rodriguez_asoc").on("click", BlancoRodriguezAsoc);
	$("#zuniga_cardenas_asoc").on("click", ZunigaCardenasAsoc);
	$("#osuna_sanchez_asoc").on("click", OsunaSanchezAsoc);
	$("#osako_peraza_asoc").on("click", OsakoPerazaAsoc);
	$("#olmeda_beltran_asoc").on("click", OlmedaBeltranAsoc);
	$("#navarro_asoc").on("click", NavarroAsoc);
	$("#beltran_rea_asoc").on("click", BeltranReaAsoc);
	$("#villela_beltran_asoc").on("click", VillelaBeltranAsoc);
	$("#sanchez_asoc").on("click", SanchezAsoc);
}

function norm()
{
	$("#bienvenidos, #nuevo_miembro, #objetivos_seccion, #directivos_seccion_1, #directivos_seccion_2, #directivos_seccion_3, #directivos_seccion_4, #quienes_somos_seccion, #contacto_seccion, #corresponsables_seccion, #asociados_seccion, #corresponsables_info, #asociados_info").hide();
	$("#normas_seccion").fadeIn();
}

function cont()
{
	$("#bienvenidos, #nuevo_miembro, #objetivos_seccion, #directivos_seccion_1, #directivos_seccion_2, #directivos_seccion_3, #directivos_seccion_4, #quienes_somos_seccion, #normas_seccion, #contacto_seccion, #corresponsables_seccion, #asociados_seccion, #corresponsables_info, #asociados_info").hide();
	$("#contacto_seccion").fadeIn();
}

function VillaSandovalCorr()
{
	$("#corresponsables_info, #espinoza_vega_corr_info, #zamora_camacho_corr_info, #moreno_medina_corr_info, #cabanillas_garcia_corr_info, #salazar_lindoro_corr_info, #quinones_galvez_corr_info, #orozco_del_valle_corr_info, #aguilar_mejia_corr_info, #blanco_rodriguez_corr_info, #zuniga_cardenas_corr_info, #osuna_sanchez_corr_info, #osako_peraza_corr_info, #olmeda_beltran_corr_info, #navarro_corr_info, #beltran_rea_corr_info").hide();
	$("#villa_sandoval_corr_info").slideDown();
}
function EspinozaVegaCorr()
{
	$("#corresponsables_info, #villa_sandoval_corr_info, #zamora_camacho_corr_info, #moreno_medina_corr_info, #cabanillas_garcia_corr_info, #salazar_lindoro_corr_info, #quinones_galvez_corr_info, #orozco_del_valle_corr_info, #aguilar_mejia_corr_info, #blanco_rodriguez_corr_info, #zuniga_cardenas_corr_info, #osuna_sanchez_corr_info, #osako_peraza_corr_info, #olmeda_beltran_corr_info, #navarro_corr_info, #beltran_rea_corr_info").hide();
	$("#espinoza_vega_corr_info").slideDown();
}
function ZamoraCamachoCorr()
{
	$("#corresponsables_info, #villa_sandoval_corr_info, #espinoza_vega_corr_info, #moreno_medina_corr_info, #cabanillas_garcia_corr_info, #salazar_lindoro_corr_info, #quinones_galvez_corr_info, #orozco_del_valle_corr_info, #aguilar_mejia_corr_info, #blanco_rodriguez_corr_info, #zuniga_cardenas_corr_info, #osuna_sanchez_corr_info, #osako_peraza_corr_info, #olmeda_beltran_corr_info, #navarro_corr_info, #beltran_rea_corr_info").hide();
	$("#zamora_camacho_corr_info").slideDown();	
}
function MorenoMedinaCorr()
{
	$("#corresponsables_info, #villa_sandoval_corr_info, #espinoza_vega_corr_info, #zamora_camacho_corr_info, #cabanillas_garcia_corr_info, #salazar_lindoro_corr_info, #quinones_galvez_corr_info, #orozco_del_valle_corr_info, #aguilar_mejia_corr_info, #blanco_rodriguez_corr_info, #zuniga_cardenas_corr_info, #osuna_sanchez_corr_info, #osako_peraza_corr_info, #olmeda_beltran_corr_info, #navarro_corr_info, #beltran_rea_corr_info").hide();
	$("#moreno_medina_corr_info").slideDown();
}
function CabanillasGarciaCorr()
{
	$("#villa_sandoval_corr_info, #corresponsables_info, #espinoza_vega_corr_info, #zamora_camacho_corr_info, #moreno_medina_corr_info, #salazar_lindoro_corr_info, #quinones_galvez_corr_info, #orozco_del_valle_corr_info, #aguilar_mejia_corr_info, #blanco_rodriguez_corr_info, #zuniga_cardenas_corr_info, #osuna_sanchez_corr_info, #osako_peraza_corr_info, #olmeda_beltran_corr_info, #navarro_corr_info, #beltran_rea_corr_info").hide();
	$("#cabanillas_garcia_corr_info").slideDown();
}
function SalazarLindoroCorr()
{
	$("#villa_sandoval_corr_info, #corresponsables_info, #espinoza_vega_corr_info, #zamora_camacho_corr_info, #moreno_medina_corr_info, #cabanillas_garcia_corr_info, #quinones_galvez_corr_info, #orozco_del_valle_corr_info, #aguilar_mejia_corr_info, #blanco_rodriguez_corr_info, #zuniga_cardenas_corr_info, #osuna_sanchez_corr_info, #osako_peraza_corr_info, #olmeda_beltran_corr_info, #navarro_corr_info, #beltran_rea_corr_info").hide();
	$("#salazar_lindoro_corr_info").slideDown();
}
function QuinonesGalvezCorr()
{
	$("#villa_sandoval_corr_info, #corresponsables_info, #espinoza_vega_corr_info, #zamora_camacho_corr_info, #moreno_medina_corr_info, #cabanillas_garcia_corr_info, #salazar_lindoro_corr_info, #orozco_del_valle_corr_info, #aguilar_mejia_corr_info, #blanco_rodriguez_corr_info, #zuniga_cardenas_corr_info, #osuna_sanchez_corr_info, #osako_peraza_corr_info, #olmeda_beltran_corr_info, #navarro_corr_info, #beltran_rea_corr_info").hide();
	$("#quinones_galvez_corr_info").slideDown();
}
function OrozcoDelValleCorr()
{
	$("#villa_sandoval_corr_info, #corresponsables_info, #espinoza_vega_corr_info, #zamora_camacho_corr_info, #moreno_medina_corr_info, #cabanillas_garcia_corr_info, #salazar_lindoro_corr_info, #quinones_galvez_corr_info, #aguilar_mejia_corr_info, #blanco_rodriguez_corr_info, #zuniga_cardenas_corr_info, #osuna_sanchez_corr_info, #osako_peraza_corr_info, #olmeda_beltran_corr_info, #navarro_corr_info, #beltran_rea_corr_info").hide();
	$("#orozco_del_valle_corr_info").slideDown();
}
function AguilarMejiaCorr()
{
	$("#villa_sandoval_corr_info, #corresponsables_info, #espinoza_vega_corr_info, #zamora_camacho_corr_info, #moreno_medina_corr_info, #cabanillas_garcia_corr_info, #salazar_lindoro_corr_info, #quinones_galvez_corr_info, #orozco_del_valle_corr_info, #blanco_rodriguez_corr_info, #zuniga_cardenas_corr_info, #osuna_sanchez_corr_info, #osako_peraza_corr_info, #olmeda_beltran_corr_info, #navarro_corr_info, #beltran_rea_corr_info").hide();
	$("#aguilar_mejia_corr_info").slideDown();
}
function BlancoRodriguezCorr()
{
	$("#villa_sandoval_corr_info, #corresponsables_info, #espinoza_vega_corr_info, #zamora_camacho_corr_info, #moreno_medina_corr_info, #cabanillas_garcia_corr_info, #salazar_lindoro_corr_info, #quinones_galvez_corr_info, #orozco_del_valle_corr_info, #aguilar_mejia_corr_info, #zuniga_cardenas_corr_info, #osuna_sanchez_corr_info, #osako_peraza_corr_info, #olmeda_beltran_corr_info, #navarro_corr_info, #beltran_rea_corr_info").hide();
	$("#blanco_rodriguez_corr_info").slideDown();
}
function ZunigaCardenasCorr()
{
	$("#villa_sandoval_corr_info, #corresponsables_info, #espinoza_vega_corr_info, #zamora_camacho_corr_info, #moreno_medina_corr_info, #cabanillas_garcia_corr_info, #salazar_lindoro_corr_info, #quinones_galvez_corr_info, #orozco_del_valle_corr_info, #aguilar_mejia_corr_info, #blanco_rodriguez_corr_info, #osuna_sanchez_corr_info, #osako_peraza_corr_info, #olmeda_beltran_corr_info, #navarro_corr_info, #beltran_rea_corr_info").hide();
	$("#zuniga_cardenas_corr_info").slideDown();
}
function OsunaSanchezCorr()
{
	$("#villa_sandoval_corr_info, #corresponsables_info, #espinoza_vega_corr_info, #zamora_camacho_corr_info, #moreno_medina_corr_info, #cabanillas_garcia_corr_info, #salazar_lindoro_corr_info, #quinones_galvez_corr_info, #orozco_del_valle_corr_info, #aguilar_mejia_corr_info, #blanco_rodriguez_corr_info, #zuniga_cardenas_corr_info, #osako_peraza_corr_info, #olmeda_beltran_corr_info, #navarro_corr_info, #beltran_rea_corr_info").hide();
	$("#osuna_sanchez_corr_info").slideDown();
}
function OsakoPerazaCorr()
{
	$("#villa_sandoval_corr_info, #corresponsables_info, #espinoza_vega_corr_info, #zamora_camacho_corr_info, #moreno_medina_corr_info, #cabanillas_garcia_corr_info, #salazar_lindoro_corr_info, #quinones_galvez_corr_info, #orozco_del_valle_corr_info, #aguilar_mejia_corr_info, #blanco_rodriguez_corr_info, #zuniga_cardenas_corr_info, #osuna_sanchez_corr_info, #olmeda_beltran_corr_info, #navarro_corr_info, #beltran_rea_corr_info").hide();
	$("#osako_peraza_corr_info").slideDown();
}
function OlmedaBeltranCorr()
{
	$("#villa_sandoval_corr_info, #corresponsables_info, #espinoza_vega_corr_info, #zamora_camacho_corr_info, #moreno_medina_corr_info, #cabanillas_garcia_corr_info, #salazar_lindoro_corr_info, #quinones_galvez_corr_info, #orozco_del_valle_corr_info, #aguilar_mejia_corr_info, #blanco_rodriguez_corr_info, #zuniga_cardenas_corr_info, #osuna_sanchez_corr_info, #osako_peraza_corr_info, #navarro_corr_info, #beltran_rea_corr_info").hide();
	$("#olmeda_beltran_corr_info").slideDown();
}
function NavarroCorr()
{
	$("#villa_sandoval_corr_info, #corresponsables_info, #espinoza_vega_corr_info, #zamora_camacho_corr_info, #moreno_medina_corr_info, #cabanillas_garcia_corr_info, #salazar_lindoro_corr_info, #quinones_galvez_corr_info, #orozco_del_valle_corr_info, #aguilar_mejia_corr_info, #blanco_rodriguez_corr_info, #zuniga_cardenas_corr_info, #osuna_sanchez_corr_info, #osako_peraza_corr_info, #olmeda_beltran_corr_info, #beltran_rea_corr_info").hide();
	$("#navarro_corr_info").slideDown();
}
function BeltranReaCorr()
{
	$("#villa_sandoval_corr_info, #corresponsables_info, #espinoza_vega_corr_info, #zamora_camacho_corr_info, #moreno_medina_corr_info, #cabanillas_garcia_corr_info, #salazar_lindoro_corr_info, #quinones_galvez_corr_info, #orozco_del_valle_corr_info, #aguilar_mejia_corr_info, #blanco_rodriguez_corr_info, #zuniga_cardenas_corr_info, #osuna_sanchez_corr_info, #osako_peraza_corr_info, #olmeda_beltran_corr_info, #navarro_corr_info").hide();
	$("#beltran_rea_corr_info").slideDown();
}

function VillaSandovalAsoc()
{
	$("#asociados_info, #espinoza_vega_Asoc_info, #zamora_camacho_Asoc_info, #moreno_medina_Asoc_info, #cabanillas_garcia_Asoc_info, #salazar_lindoro_Asoc_info, #quinones_galvez_Asoc_info, #aguilar_mejia_Asoc_info, #blanco_rodriguez_Asoc_info, #zuniga_cardenas_Asoc_info, #osuna_sanchez_Asoc_info, #osako_peraza_Asoc_info, #olmeda_beltran_Asoc_info, #navarro_Asoc_info, #beltran_rea_Asoc_info, #villela_beltran_Asoc_info, #sanchez_Asoc_info").hide();
	$("#villa_sandoval_Asoc_info").fadeIn();
}
function EspinozaVegaAsoc()
{
	$("#asociados_info, #villa_sandoval_Asoc_info, #zamora_camacho_Asoc_info, #moreno_medina_Asoc_info, #cabanillas_garcia_Asoc_info, #salazar_lindoro_Asoc_info, #quinones_galvez_Asoc_info, #aguilar_mejia_Asoc_info, #blanco_rodriguez_Asoc_info, #zuniga_cardenas_Asoc_info, #osuna_sanchez_Asoc_info, #osako_peraza_Asoc_info, #olmeda_beltran_Asoc_info, #navarro_Asoc_info, #beltran_rea_Asoc_info, #villela_beltran_Asoc_info, #sanchez_Asoc_info").hide();
	$("#espinoza_vega_Asoc_info").fadeIn();
}
function ZamoraCamachoAsoc()
{
	$("#asociados_info, #villa_sandoval_Asoc_info, #espinoza_vega_Asoc_info, #moreno_medina_Asoc_info, #cabanillas_garcia_Asoc_info, #salazar_lindoro_Asoc_info, #quinones_galvez_Asoc_info, #aguilar_mejia_Asoc_info, #blanco_rodriguez_Asoc_info, #zuniga_cardenas_Asoc_info, #osuna_sanchez_Asoc_info, #osako_peraza_Asoc_info, #olmeda_beltran_Asoc_info, #navarro_Asoc_info, #beltran_rea_Asoc_info, #villela_beltran_Asoc_info, #sanchez_Asoc_info").hide();
	$("#zamora_camacho_Asoc_info").fadeIn();	
}
function MorenoMedinaAsoc()
{
	$("#asociados_info, #villa_sandoval_Asoc_info, #espinoza_vega_Asoc_info, #zamora_camacho_Asoc_info, #cabanillas_garcia_Asoc_info, #salazar_lindoro_Asoc_info, #quinones_galvez_Asoc_info, #aguilar_mejia_Asoc_info, #blanco_rodriguez_Asoc_info, #zuniga_cardenas_Asoc_info, #osuna_sanchez_Asoc_info, #osako_peraza_Asoc_info, #olmeda_beltran_Asoc_info, #navarro_Asoc_info, #beltran_rea_Asoc_info, #villela_beltran_Asoc_info, #sanchez_Asoc_info").hide();
	$("#moreno_medina_Asoc_info").fadeIn();
}
function CabanillasGarciaAsoc()
{
	$("#villa_sandoval_Asoc_info, #asociados_info, #espinoza_vega_Asoc_info, #zamora_camacho_Asoc_info, #moreno_medina_Asoc_info, #salazar_lindoro_Asoc_info, #quinones_galvez_Asoc_info, #aguilar_mejia_Asoc_info, #blanco_rodriguez_Asoc_info, #zuniga_cardenas_Asoc_info, #osuna_sanchez_Asoc_info, #osako_peraza_Asoc_info, #olmeda_beltran_Asoc_info, #navarro_Asoc_info, #beltran_rea_Asoc_info, #villela_beltran_Asoc_info, #sanchez_Asoc_info").hide();
	$("#cabanillas_garcia_Asoc_info").fadeIn();
}
function SalazarLindoroAsoc()
{
	$("#villa_sandoval_Asoc_info, #asociados_info, #espinoza_vega_Asoc_info, #zamora_camacho_Asoc_info, #moreno_medina_Asoc_info, #cabanillas_garcia_Asoc_info, #quinones_galvez_Asoc_info, #aguilar_mejia_Asoc_info, #blanco_rodriguez_Asoc_info, #zuniga_cardenas_Asoc_info, #osuna_sanchez_Asoc_info, #osako_peraza_Asoc_info, #olmeda_beltran_Asoc_info, #navarro_Asoc_info, #beltran_rea_Asoc_info, #villela_beltran_Asoc_info, #sanchez_Asoc_info").hide();
	$("#salazar_lindoro_Asoc_info").fadeIn();
}
function QuinonesGalvezAsoc()
{
	$("#villa_sandoval_Asoc_info, #asociados_info, #espinoza_vega_Asoc_info, #zamora_camacho_Asoc_info, #moreno_medina_Asoc_info, #cabanillas_garcia_Asoc_info, #salazar_lindoro_Asoc_info, #aguilar_mejia_Asoc_info, #blanco_rodriguez_Asoc_info, #zuniga_cardenas_Asoc_info, #osuna_sanchez_Asoc_info, #osako_peraza_Asoc_info, #olmeda_beltran_Asoc_info, #navarro_Asoc_info, #beltran_rea_Asoc_info, #villela_beltran_Asoc_info, #sanchez_Asoc_info").hide();
	$("#quinones_galvez_Asoc_info").fadeIn();
}
function AguilarMejiaAsoc()
{
	$("#villa_sandoval_Asoc_info, #asociados_info, #espinoza_vega_Asoc_info, #zamora_camacho_Asoc_info, #moreno_medina_Asoc_info, #cabanillas_garcia_Asoc_info, #salazar_lindoro_Asoc_info, #quinones_galvez_Asoc_info, #blanco_rodriguez_Asoc_info, #zuniga_cardenas_Asoc_info, #osuna_sanchez_Asoc_info, #osako_peraza_Asoc_info, #olmeda_beltran_Asoc_info, #navarro_Asoc_info, #beltran_rea_Asoc_info, #villela_beltran_Asoc_info, #sanchez_Asoc_info").hide();
	$("#aguilar_mejia_Asoc_info").fadeIn();
}
function BlancoRodriguezAsoc()
{
	$("#villa_sandoval_Asoc_info, #asociados_info, #espinoza_vega_Asoc_info, #zamora_camacho_Asoc_info, #moreno_medina_Asoc_info, #cabanillas_garcia_Asoc_info, #salazar_lindoro_Asoc_info, #quinones_galvez_Asoc_info, #aguilar_mejia_Asoc_info, #zuniga_cardenas_Asoc_info, #osuna_sanchez_Asoc_info, #osako_peraza_Asoc_info, #olmeda_beltran_Asoc_info, #navarro_Asoc_info, #beltran_rea_Asoc_info, #villela_beltran_Asoc_info, #sanchez_Asoc_info").hide();
	$("#blanco_rodriguez_Asoc_info").fadeIn();
}
function ZunigaCardenasAsoc()
{
	$("#villa_sandoval_Asoc_info, #asociados_info, #espinoza_vega_Asoc_info, #zamora_camacho_Asoc_info, #moreno_medina_Asoc_info, #cabanillas_garcia_Asoc_info, #salazar_lindoro_Asoc_info, #quinones_galvez_Asoc_info, #aguilar_mejia_Asoc_info, #blanco_rodriguez_Asoc_info, #osuna_sanchez_Asoc_info, #osako_peraza_Asoc_info, #olmeda_beltran_Asoc_info, #navarro_Asoc_info, #beltran_rea_Asoc_info, #villela_beltran_Asoc_info, #sanchez_Asoc_info").hide();
	$("#zuniga_cardenas_Asoc_info").fadeIn();
}
function OsunaSanchezAsoc()
{
	$("#villa_sandoval_Asoc_info, #asociados_info, #espinoza_vega_Asoc_info, #zamora_camacho_Asoc_info, #moreno_medina_Asoc_info, #cabanillas_garcia_Asoc_info, #salazar_lindoro_Asoc_info, #quinones_galvez_Asoc_info, #aguilar_mejia_Asoc_info, #blanco_rodriguez_Asoc_info, #zuniga_cardenas_Asoc_info, #osako_peraza_Asoc_info, #olmeda_beltran_Asoc_info, #navarro_Asoc_info, #beltran_rea_Asoc_info, #villela_beltran_Asoc_info, #sanchez_Asoc_info").hide();
	$("#osuna_sanchez_Asoc_info").fadeIn();
}
function OsakoPerazaAsoc()
{
	$("#villa_sandoval_Asoc_info, #asociados_info, #espinoza_vega_Asoc_info, #zamora_camacho_Asoc_info, #moreno_medina_Asoc_info, #cabanillas_garcia_Asoc_info, #salazar_lindoro_Asoc_info, #quinones_galvez_Asoc_info, #aguilar_mejia_Asoc_info, #blanco_rodriguez_Asoc_info, #zuniga_cardenas_Asoc_info, #osuna_sanchez_Asoc_info, #olmeda_beltran_Asoc_info, #navarro_Asoc_info, #beltran_rea_Asoc_info, #villela_beltran_Asoc_info, #sanchez_Asoc_info").hide();
	$("#osako_peraza_Asoc_info").fadeIn();
}
function OlmedaBeltranAsoc()
{
	$("#villa_sandoval_Asoc_info, #asociados_info, #espinoza_vega_Asoc_info, #zamora_camacho_Asoc_info, #moreno_medina_Asoc_info, #cabanillas_garcia_Asoc_info, #salazar_lindoro_Asoc_info, #quinones_galvez_Asoc_info, #aguilar_mejia_Asoc_info, #blanco_rodriguez_Asoc_info, #zuniga_cardenas_Asoc_info, #osuna_sanchez_Asoc_info, #osako_peraza_Asoc_info, #navarro_Asoc_info, #beltran_rea_Asoc_info, #villela_beltran_Asoc_info, #sanchez_Asoc_info").hide();
	$("#olmeda_beltran_Asoc_info").fadeIn();
}
function NavarroAsoc()
{
	$("#villa_sandoval_Asoc_info, #asociados_info, #espinoza_vega_Asoc_info, #zamora_camacho_Asoc_info, #moreno_medina_Asoc_info, #cabanillas_garcia_Asoc_info, #salazar_lindoro_Asoc_info, #quinones_galvez_Asoc_info, #aguilar_mejia_Asoc_info, #blanco_rodriguez_Asoc_info, #zuniga_cardenas_Asoc_info, #osuna_sanchez_Asoc_info, #osako_peraza_Asoc_info, #olmeda_beltran_Asoc_info, #beltran_rea_Asoc_info, #villela_beltran_Asoc_info, #sanchez_Asoc_info").hide();
	$("#navarro_Asoc_info").fadeIn();
}
function BeltranReaAsoc()
{
	$("#villa_sandoval_Asoc_info, #asociados_info, #espinoza_vega_Asoc_info, #zamora_camacho_Asoc_info, #moreno_medina_Asoc_info, #cabanillas_garcia_Asoc_info, #salazar_lindoro_Asoc_info, #quinones_galvez_Asoc_info, #aguilar_mejia_Asoc_info, #blanco_rodriguez_Asoc_info, #zuniga_cardenas_Asoc_info, #osuna_sanchez_Asoc_info, #osako_peraza_Asoc_info, #olmeda_beltran_Asoc_info, #navarro_Asoc_info, #villela_beltran_Asoc_info, #sanchez_Asoc_info").hide();
	$("#beltran_rea_Asoc_info").fadeIn();
}
function VillelaBeltranAsoc()
{
	$("#villa_sandoval_Asoc_info, #asociados_info, #espinoza_vega_Asoc_info, #zamora_camacho_Asoc_info, #moreno_medina_Asoc_info, #cabanillas_garcia_Asoc_info, #salazar_lindoro_Asoc_info, #quinones_galvez_Asoc_info, #aguilar_mejia_Asoc_info, #blanco_rodriguez_Asoc_info, #zuniga_cardenas_Asoc_info, #osuna_sanchez_Asoc_info, #osako_peraza_Asoc_info, #olmeda_beltran_Asoc_info, #navarro_Asoc_info, #beltran_rea_Asoc_info").hide();
	$("#villela_beltran_Asoc_info").fadeIn();
}
function SanchezAsoc()
{
	$("#villa_sandoval_Asoc_info, #asociados_info, #espinoza_vega_Asoc_info, #zamora_camacho_Asoc_info, #moreno_medina_Asoc_info, #cabanillas_garcia_Asoc_info, #salazar_lindoro_Asoc_info, #quinones_galvez_Asoc_info, #aguilar_mejia_Asoc_info, #blanco_rodriguez_Asoc_info, #zuniga_cardenas_Asoc_info, #osuna_sanchez_Asoc_info, #osako_peraza_Asoc_info, #olmeda_beltran_Asoc_info, #navarro_Asoc_info, #beltran_rea_Asoc_info, #villela_beltran_Asoc_info").hide();
	$("#sanchez_Asoc_info").fadeIn();
}