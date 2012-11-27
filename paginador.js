Paginador = function (id_elem, maxItems, lenght ){

	this.active = 1;
	this.id = id_elem; 
	this.nodoIni = 1; 
	this.maxNodo = maxItems; 
	this.numNodo = lenght;

	var ide = this.id;

	this.actualizaActive = function (nodo){

		if (parseInt($(nodo).text()) )
			this.active = parseInt($(nodo).text());
		else {
			if ( nodo.parentNode.className == 'first-page'){
				this.active = 1;
				this.nodoIni = 1;
			}
			if ( nodo.parentNode.className == 'less-page' && this.active > 1 ){

				if ( this.active == this.nodoIni)
					this.nodoIni--;

				this.active = this.active - 1;
			}	
			if ( nodo.parentNode.className == 'more-page' && this.active < this.maxNodo ){
				this.active = this.active + 1;

				if ( this.active == this.nodoIni + this.numNodo)
					this.nodoIni++;
			}
			if ( nodo.parentNode.className == 'last-page' ){
				this.active = this.maxNode;
				this.nodoIni = this.maxNode - this.numNodo;
			}
		}

	};
	
	this.imprimirPag = function (active) {

		imprimirNodo( '&laquo;' , {'class':'first-page'});
		imprimirNodo( '&lsaquo;' , {'class':'less-page'});

		for( i = this.nodoIni ; i < this.numNodo + this.nodoIni ; i++ ){

			if( this.active == i)
				imprimirNodo( i , {'class':'active'});
			else
				imprimirNodo( i , {});

		}

		imprimirNodo( '&rsaquo;' , {'class':'more-page'});
		imprimirNodo( '&raquo;' , {'class':'last-page'});

		//$(this).lisview('refresh');
		//if($(e.target).text() != "<<")
		//$(e.target).addClass('active');

	};

	function imprimirNodo (text, estilos){

		$('<li>').attr(estilos).append($('<a>').attr('href','#').html(text)).appendTo($('#'+ide+''));
	};

}
