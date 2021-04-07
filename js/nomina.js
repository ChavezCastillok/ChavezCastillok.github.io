function main() {
  var fecha_completa = new Date();

  var cant_lunes_mes = get_cant_lunes_mes();

  var sueldo_month = document.getElementById("sueldo_month");

  sueldo_month.addEventListener("input", () => {
    sueldo = parseFloat(sueldo_month.value);
    if (isFinite(sueldo)) {
      // Sueldo Basico
      let sueldo_anual = sueldo * 12;
      let sueldo_semanal = sueldo_anual / 52;
      let sueldo_diario = sueldo / 30;

      let dias_utilidades = document.getElementById("utility_days").value;
      let utilidades = (dias_utilidades / 12 / 30) * sueldo_diario;

      let bono_vaciones = document.getElementById("bonus_vacational").value;
      let vacaciones = (bono_vaciones / 12 / 30) * sueldo_diario;

      // Calculo IVSS
      let monto_retencion_trabajador = sueldo_semanal * 0.04;
      let MRT_mensual = monto_retencion_trabajador * cant_lunes_mes;
      let MRT_quincena = MRT_mensual / 2;
      let aporte_patronal_ivss = sueldo * 0.11;
      let total_ivss_mes = MRT_mensual + aporte_patronal_ivss;

      // Sueldo Integral
      let sueldo_integral_diario = sueldo_diario + utilidades + vacaciones;
      let sueldo_integral_mensual =
        (sueldo_diario + utilidades + vacaciones) * 30;
      let sueldo_integral_anual = sueldo_integral_mensual * 12;
      let sueldo_integral_semanal = sueldo_integral_anual / 52;

      // Calculo FAOV
      let aporte_lph = sueldo_integral_mensual * 0.03;
      let mrt_1 = sueldo_integral_mensual * 0.01;
      let aporte_patrono_lph = sueldo_integral_mensual * 0.02;
      let total_faov = mrt_1 + aporte_patrono_lph;

      document.querySelector("#vacaciones").innerHTML = vacaciones.toFixed("2");
      document.querySelector("#utilidades").innerHTML = utilidades.toFixed("2");
      document.querySelector("#sueldo_year").value = sueldo_anual.toFixed("2");
      document.querySelector("#sueldo_week").value = sueldo_semanal.toFixed(
        "2"
      );
      document.querySelector("#sueldo_day").value = sueldo_diario.toFixed("2");
      document.querySelector(
        "#sueldo_integral_mensual"
      ).value = sueldo_integral_mensual.toFixed("2");
      document.querySelector(
        "#sueldo_integral_anual"
      ).value = sueldo_integral_anual.toFixed("2");
      document.querySelector(
        "#sueldo_integral_semanal"
      ).value = sueldo_integral_semanal.toFixed("2");
      document.querySelector(
        "#sueldo_integral_diario"
      ).value = sueldo_integral_diario.toFixed("2");
      document.querySelector(
        "#mrt_week"
      ).innerHTML = monto_retencion_trabajador.toFixed("4");
      document.querySelector("#mrt_month").innerHTML = MRT_mensual.toFixed("2");
      document.querySelector("#mrt_quincena").innerHTML = MRT_quincena.toFixed(
        "2"
      );
      document.querySelector(
        "#aporte_patrono_ivss"
      ).innerHTML = aporte_patronal_ivss.toFixed("2");
      document.querySelector(
        "#aporte_ivss_mes"
      ).innerHTML = total_ivss_mes.toFixed("2");

      document.querySelector("#aporte_faov").innerHTML = aporte_lph.toFixed(
        "2"
      );
      document.querySelector("#mrt_lph").innerHTML = mrt_1.toFixed("2");
      document.querySelector(
        "#aporte_lph_patrono"
      ).innerHTML = aporte_patrono_lph.toFixed("2");
      document.querySelector("#total_lph_faov").innerHTML = total_faov.toFixed(
        "2"
      );

      let inces = sueldo * 3 * 0.02;
      document.querySelector("#aporte_inces").innerHTML = inces.toFixed("2");
    } else {
      console.log("pendiente el sueldo o no es valido");
    }
  });
}

function get_cant_lunes_mes() {
  return 4;
}

addEventListener("load", main, false);
