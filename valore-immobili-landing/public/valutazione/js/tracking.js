(function () {
  var number = (window.APP_CONFIG && window.APP_CONFIG.whatsappNumber) || '';
  var normalized = String(number).replace(/\D/g, '');
  var message = 'Ciao, ho visto la vostra pagina e vorrei informazioni per fissare un sopralluogo gratuito per la valutazione del mio immobile.';
  var popupDismissKey = 'vi_whatsapp_popup_dismissed';

  function pushEvent(payload) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(payload);
  }

  function wireWhatsAppLink(anchor) {
    if (!anchor || !normalized) return;
    anchor.href = 'https://wa.me/' + normalized + '?text=' + encodeURIComponent(message);
    anchor.target = '_blank';
    anchor.rel = 'noopener';
    anchor.addEventListener('click', function () {
      pushEvent({
        event: 'whatsapp_click',
        lead_type: 'whatsapp',
        page_step: anchor.dataset.step || 'unknown',
        whatsapp_number: normalized
      });
    });
  }

  function createWhatsAppPopup(anchor) {
    if (!anchor) return;
    if (!anchor.classList.contains('fixed')) return;
    if (window.localStorage && window.localStorage.getItem(popupDismissKey) === '1') return;

    var popup = document.createElement('div');
    popup.className = 'fixed right-6 bottom-24 z-50 max-w-[250px] rounded-xl border border-secondary/15 bg-white/95 px-4 py-3 shadow-2xl backdrop-blur';
    popup.innerHTML =
      '<button type="button" aria-label="Chiudi messaggio WhatsApp" class="absolute top-1 right-1 h-5 w-5 text-tertiary hover:text-secondary">x</button>' +
      '<p class="pr-4 text-xs font-semibold text-secondary">Hai urgenza? Contattaci ora su WhatsApp</p>';

    var closeBtn = popup.querySelector('button');
    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        popup.remove();
        if (window.localStorage) {
          window.localStorage.setItem(popupDismissKey, '1');
        }
      });
    }

    anchor.addEventListener('click', function () {
      popup.remove();
    });

    document.body.appendChild(popup);
  }

  var whatsappLinks = document.querySelectorAll('.js-whatsapp-link');
  whatsappLinks.forEach(wireWhatsAppLink);
  createWhatsAppPopup(document.querySelector('.js-whatsapp-link.fixed'));
})();
