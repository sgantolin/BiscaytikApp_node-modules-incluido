<!-- Rutas SIN IMAGEN -->
<xsl:template name="Restaurantes2026" match="Row[@Style='Restaurantes2026']" mode="itemstyle">

	<div class="BKTT-CardContainer__item col col-12">

		<div class="BKTT-CardContainer__card card BKTT-CardContainer__card--horizontal BKTT-CardContainer__card--no-image">

			<div class="BKTT-Card__main">

				<h3 class="BKTT-Card__title">
					<a class="BKTT-Link" href="/plan-cultural" itemprop="url">
						<span class="BKTT-Label" itemprop="name">Plan cultural de un día</span>
					</a>
				</h3>

				<div class="BKTT-Card__Body">

					<div class="BKTT-Card__TagsProgress d-flex align-items-center mb-2">

						<ul class="BKTT-Tags">
							<li>
								<span class="BKTT-Icon fa-regular fa-clock me-2">
									<xsl:text>&#8203;</xsl:text>
								</span>
								<span class="BKTT-Label">1 h 30 m</span>
							</li>

							<li>
								<span class="BKTT-Icon fa-solid fa-person-hiking me-2">
									<xsl:text>&#8203;</xsl:text>
								</span>
								<span class="BKTT-Label">5 Km</span>
							</li>
						</ul>

						<div class="BKTT-progress__Container flex-grow-1">

							<div class="BKTT-progress progress" style="height: 6px;">
								<div class="progress-bar bg-success"
									role="progressbar"
									aria-valuenow="30"
									aria-valuemin="0"
									aria-valuemax="100"
									style="width: 30%;">
									<xsl:text>&#8203;</xsl:text>
								</div>
							</div>

							<small class="BKTT-Label">Dif. baja</small>

						</div>

					</div>

					<p itemprop="description">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisque luctus aliquet lectus,
						pellentesque elementum nunc pellentesque vel. Nulla vitae massa lobortis, rhoncus leo ac,...
					</p>

				</div>
			</div>

		</div>
	</div>

</xsl:template>

<!-- Rutas CON IMAGEN -->
<xsl:template name="PlanCultural2026_DISABLED" match="Row[@Style='__DISABLED__']" mode="itemstyle">
	<div class="BKTT-CardContainer__item col col-12" itemscope="itemscope" itemtype="https://schema.org/Event">
		<div class="BKTT-CardContainer__card card BKTT-CardContainer__card--horizontal BKTT-CardContainer__card--alt">

			<figure class="BKTT-Card__figure" itemprop="image">
				<span class="BKTT-Badge badge bg-light text-dark">
					<span class="BKTT-Icon fa-solid fa-mountain me-2"></span>
					<span>Txipio</span>
				</span>

				<img src="/_layouts/15/Turismo2013.Files/custom_web/assets/themes/default/media/rio.jpg"
					class="card-img-top"
					alt="Ruta por el monte Txipio"
					itemprop="image"/>
			</figure>

			<div class="BKTT-Card__main">
				<data value="">
					<small class="BKTT-Card__note"></small>
				</data>

				<h3 class="BKTT-Card__title">
					<a class="BKTT-Link" href="/ruta-txipio" itemprop="url">
						<span class="BKTT-Label" itemprop="name">Ruta por el monte Txipio</span>
					</a>
				</h3>

				<div class="BKTT-Card__Body">

					<div class="BKTT-Card__TagsProgress d-flex align-items-center mb-2">

						<ul class="BKTT-Tags">
							<li>
								<span class="BKTT-Icon fa-regular fa-clock me-2"></span>
								<span class="BKTT-Label">2 h</span>
							</li>

							<li>
								<span class="BKTT-Icon fa-solid fa-person-hiking me-2"></span>
								<span class="BKTT-Label">19 Km</span>
							</li>
						</ul>

						<div class="BKTT-progress__Container flex-grow-1">
							<div class="BKTT-progress progress" style="height: 6px;">
								<div class="progress-bar bg-warning"
									role="progressbar"
									aria-valuenow="55"
									aria-valuemin="0"
									aria-valuemax="100"
									style="width: 55%;">
								</div>
							</div>

							<small class="BKTT-Label">Dif. media</small>
						</div>

					</div>

					<p itemprop="description">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisque luctus aliquet lectus...
					</p>

				</div>
			</div>

		</div>
	</div>
</xsl:template>

<!-- AGENDA DEPORTE -->
<xsl:template name="Deporte2026_DISABLED" match="Row[@Style='__DISABLED_DEPORTE__']" mode="itemstyle">
	<div class="BKTT-CardContainer__item col">
		<div class="BKTT-CardContainer__card card">

			<figure class="BKTT-Card__figure" itemprop="image">

				<span class="BKTT-Badge badge bg-light text-dark">
					<span>Deporte</span>
				</span>

				<img src="/_layouts/15/Turismo2013.Files/custom_web/assets/themes/default/media/canoa.jpg"
					class="card-img-top"
					alt="Ruta acuática por el río Butrón"
					itemprop="image"/>
			</figure>

			<div class="BKTT-Card__main">
				<data value="">
					<small class="BKTT-Card__note"></small>
				</data>

				<h3 class="BKTT-Card__title">
					<a class="BKTT-Link" href="/ruta-acuatica-rio-butron" itemprop="url">
						<span class="BKTT-Label" itemprop="name">Ruta acuática por el río Butrón</span>
					</a>
				</h3>

				<div class="BKTT-Card__Body">

					
					<div class="BKTT-Card__TagsProgress d-flex align-items-center mb-2">
						<ul class="BKTT-Tags">
							<li>
								<span class="BKTT-Icon fa-light fa-calendar me-2"></span>
								<span class="BKTT-Label">
									<time datetime="2026-01-12" itemprop="startDate">12/01/2026</time>
									<span> - </span>
									<time datetime="2026-01-15" itemprop="endDate">15/01/2026</time>
								</span>
							</li>
						</ul>
					</div>

					
					<div class="BKTT-Card__Data d-flex justify-content-between align-items-center mb-2">
						<div class="BKTT-Data" itemscope="itemscope" itemtype="https://schema.org/Offer">
							<meta itemprop="priceCurrency" content="EUR"/>
							<meta itemprop="price" content="10"/>
							<meta itemprop="availability" content="https://schema.org/InStock"/>
							<strong itemprop="price">10€</strong>
							<span class="BKTT-Icon fa-regular"></span>
						</div>
					</div>

				</div>

				<div class="BKTT-Card__Footer d-flex justify-content-end">
					<button type="button" class="BKTT-Button btn btn-primary">
						<span class="BKTT-Icon fa-solid fa-link me-1"></span>
						<span class="BKTT-Label">RESERVAR</span>
					</button>
				</div>

			</div>
		</div>
	</div>
</xsl:template>


<!-- RESTAURANTES2026 - PRUEBA ESTÁTICA -->
<xsl:template name="Restaurantes2026_DISABLED" match="Row[@Style='__DISABLEDRes__']" mode="itemstyle">
	<div class="BKTT-CardContainer__item col">
		<div class="BKTT-CardContainer__card card">

			<figure class="BKTT-Card__figure" itemprop="image">
			
			<span class="BKTT-Badge badge bg-light text-dark">
					<span>Restaurante</span>
				</span>
				
				<img src="/PublishingImages/COMER2026/RESTAURANTES/BATEA/Batea.jpg"
					class="card-img-top"
					alt="La Batea Mejillonerías Santurtzi"
					itemprop="image"/>
			</figure>

			<div class="BKTT-Card__main">
				<data value="">
					<small class="BKTT-Card__note"></small>
				</data>

				<h3 class="BKTT-Card__title">
					<a class="BKTT-Link" href="https://turismoi.santurtzi.com/es-es/Comer2026/Restaurantes/Paginas/Batea-Mejillonerias.aspx" itemprop="url">
						<span class="BKTT-Label" itemprop="name">La Batea Mejillonerías Santurtzi</span>
					</a>
				</h3>

				<div class="BKTT-Card__Body">

					 ACCESIBLE 
					<div class="BKTT-Card__TagsProgress d-flex align-items-center mb-2">
						<ul class="BKTT-Tags">
							<li>
								<span class="BKTT-Icon fa-solid fa-wheelchair me-2"></span>
								<span class="BKTT-Label">ACCESIBLE</span>
							</li>
						</ul>
					</div>

					PRECIO 
					<div class="BKTT-Card__Data d-flex justify-content-between align-items-center mb-2">
						<div class="BKTT-Data" itemscope="itemscope" itemtype="https://schema.org/Offer">
							<meta itemprop="priceCurrency" content="EUR"/>
							<meta itemprop="price" content="50"/>
							<meta itemprop="availability" content="https://schema.org/InStock"/>
							<strong itemprop="price">50 - 100€</strong>
							<span class="BKTT-Icon fa-regular"></span>
						</div>
					</div>

					<p itemprop="description">3 estrellas</p>

				</div>

				<div class="BKTT-Card__Footer d-flex justify-content-end">
					<button type="button" class="BKTT-Button btn btn-primary">
						<span class="BKTT-Icon fa-solid fa-link me-1"></span>
						<span class="BKTT-Label">RESERVA</span>
					</button>
				</div>

			</div>
		</div>
	</div>
</xsl:template>
<!--Alojamientos "mismos" campos que restaurantes-->

<!-- NOTICIAS -->
<xsl:template name="Restaurantes2026" match="Row[@Style='Restaurantes2026']" mode="itemstyle">

	<li class="BKTT-CardContainer__item col" itemscope="" itemtype="https://schema.org/NewsArticle">
		<div class="BKTT-CardContainer__card card BKTT-CardContainer__card--horizontal BKTT-CardContainer__card--no-image">
				<span class="BKTT-Badge badge bg-light text-dark">
					<span>Parejas</span>
				</span>

			<div class="BKTT-Card__main">
				<h3 class="BKTT-Card__title">
					<a class="BKTT-Link" href="/noticia-plan-cultural-1" itemprop="url">
						<span class="BKTT-Label" itemprop="name">
							Plan cultural de un día
						</span>
					</a>
				</h3>

				<div class="BKTT-Card__Body">

					<div class="BKTT-Card__Data d-flex justify-content-between align-items-center mb-2">

						<div class="BKTT-Date">

							<span class="BKTT-Icon fa-light fa-calendar me-2">
								<xsl:text>&#8203;</xsl:text>
							</span>

							<time datetime="2026-01-22" itemprop="startDate">
								22/01/2026
							</time>

							<span> - </span>

							<time datetime="2026-01-24" itemprop="endDate">
								24/01/2026
							</time>

						</div>

					</div>

					<p itemprop="description">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus
						aliquet lectus, pellentesque elementum nunc pellentesque vel. Nulla vitae
						massa lobortis, rhoncus leo ac, vulputate dolor. Maecenas posuere facilisis
						pretium. Quisque felis ante, tempor ac mi sit amet, tincidunt aliquam arcu.
						Vivamus neque neque, efficitur sit amet magna ut, pretium laoreet ipsum.
						Aliquam dictum purus in convallis tempor. Aenean porta eget arcu in luctus.
					</p>

				</div>

			</div>

		</div>

	</li>

</xsl:template>


<!-- Cambiar <xsl:template name="Restaurantes2026" match="Row[@Style='Restaurantes2026']" mode="itemstyle"> para que lo pille el ItemStyle -->