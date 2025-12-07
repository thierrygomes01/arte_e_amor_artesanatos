import { useEffect, useState } from "react";
import "./index.css";
import {
  MessageCircle,
  Instagram,
  Dot,
  ArrowRight,
  ChevronRight,
  Truck,
  Menu,
  X,
} from "lucide-react";

// ⭐ IMPORTAÇÃO DAS IMAGENS
import {
  logo,
  coracao,
  instagram4,
  vestido,
  casa,
  prato,
  ursinho,
  bolsa,
  estrela,
} from "./assets/images";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Destaques");
  const [isProductsViewOpen, setIsProductsViewOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY > 10) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  const handleCategorySelect = (categoryName) => {
    setSelectedCategory(categoryName);
    setIsProductsViewOpen(true);
    closeMenu();

    setTimeout(() => {
      document
        .getElementById("selected-products-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const closeProductsView = () => {
    setSelectedCategory("Destaques");
    setIsProductsViewOpen(false);

    setTimeout(() => {
      document
        .getElementById("categorias-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const getWhatsAppLink = (productName) => {
    const phoneNumber = "5511983199876";
    const message = encodeURIComponent(
      `Olá, gostaria de saber mais sobre o produto: ${productName}.`
    );
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  const handleWhatsAppClick = (
    contextMessage = "Olá, gostaria de fazer um pedido!"
  ) => {
    const phoneNumber = "5511983199876";
    const message = encodeURIComponent(contextMessage);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  // ⭐ AGORA TODAS AS IMAGENS VEM VIA IMPORT
  const allProducts = [
    {
      id: 1,
      name: "Cropped Boho Chic",
      price: "R$ 129,90",
      image: instagram4,
      tag: "Mais Vendido",
      category: "Roupas",
    },
    {
      id: 2,
      name: "Bolsa de Praia Natural",
      price: "R$ 189,90",
      image: instagram4,
      tag: "Lançamento",
      category: "Acessórios",
    },
    {
      id: 3,
      name: "Kit Mesa Posta (4 un)",
      price: "R$ 149,90",
      image: instagram4,
      tag: "Personalizável",
      category: "Mesa Posta",
    },
    {
      id: 4,
      name: "Amigurumi Ursinho",
      price: "Sob Consulta",
      image: instagram4,
      tag: "Infantil",
      category: "Amigurumis",
    },
    {
      id: 5,
      name: "Tapete Redondo Sala",
      price: "R$ 299,90",
      image: instagram4,
      tag: "Decoração",
      category: "Decoração",
    },
    {
      id: 6,
      name: "Cesto Organizador",
      price: "R$ 89,90",
      image: instagram4,
      tag: "Decoração",
      category: "Decoração",
    },
    {
      id: 7,
      name: "Saída de Praia Longa",
      price: "R$ 219,90",
      image: instagram4,
      tag: "Verão",
      category: "Roupas",
    },
    {
      id: 8,
      name: "Polvo Amigurumi",
      price: "R$ 120,00",
      image: instagram4,
      tag: "Infantil",
      category: "Amigurumis",
    },
  ];

  const featuredProducts = allProducts.slice(0, 4);

  const categories = [
    { name: "Roupas", icon: vestido, desc: "Tops, saias e vestidos leves" },
    { name: "Decoração", icon: casa, desc: "Cestos, tapetes e mantas" },
    { name: "Mesa Posta", icon: prato, desc: "Sousplat e caminhos de mesa" },
    { name: "Amigurumis", icon: ursinho, desc: "Bichinhos feitos com amor" },
    { name: "Acessórios", icon: bolsa, desc: "Bolsas e chapéus exclusivos" },
    {
      name: "Encomendas",
      icon: estrela,
      desc: "Sua ideia transformada em arte",
    },
  ];

  const productsToDisplay =
    selectedCategory === "Todos"
      ? allProducts
      : allProducts.filter(
          (p) =>
            p.category === selectedCategory ||
            (selectedCategory === "Encomendas" && p.tag === "Personalizável")
        );

  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo Arte e Amor Artesanatos" />
        </div>

        <nav className="menu desktop-menu">
          <a href="#catalogo">Catálogo</a>
          <a href="#encomendas">Encomendas</a>
          <a href="#">Sobre</a>
          <a href="#contato">Contato</a>
        </nav>

        <div className="contato-header">
          <Instagram className="icon-instagram" size={20} />

          <div
            className="contato-button"
            onClick={() =>
              handleWhatsAppClick("Olá, gostaria de fazer um pedido!")
            }
          >
            <MessageCircle className="icon-contato" size={15} />
            <p className="p-contato-button">Fazer Pedido</p>
          </div>

          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <nav className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-link">
          <a href="#catalogo" onClick={closeMenu}>
            Catálogo
          </a>
          <a href="#encomendas" onClick={closeMenu}>
            Encomendas
          </a>
          <a href="#" onClick={closeMenu}>
            Sobre
          </a>
          <a href="#contato" onClick={closeMenu}>
            Contato
          </a>
        </div>

        <button
          className="btn-menu-hamb"
          onClick={() =>
            handleWhatsAppClick(
              "Olá, gostaria de saber mais sobre seus produtos!"
            )
          }
        >
          <MessageCircle /> Pedir no Whatsapp
        </button>
      </nav>

      <div id="catalogo" className="main">
        <div className="top">
          <div className="destaque">
            <div className="msg">
              <img src={coracao} alt="Coração" />
              <p className="p-msg">
                100% ARTESANAL
                <span className="ponto">
                  <Dot />
                </span>
                FEITO COM AMOR
              </p>
            </div>

            <h1>
              Crochê feito à mão com <span>carinho</span> e alma.
            </h1>

            <p>
              Peças exclusivas, acabamento impecável e encomendas sob medida
              para vestir você e sua casa.
            </p>

            <div className="buttons-destaque">
              <button
                className="btn-cat"
                onClick={() => handleCategorySelect("Todos")}
              >
                Ver Catálogo
              </button>

              <button
                className="btn-enc"
                onClick={() =>
                  handleWhatsAppClick(
                    "Olá, gostaria de fazer uma encomenda personalizada!"
                  )
                }
              >
                <MessageCircle size={17} /> Encomendar
              </button>
            </div>
          </div>

          <div className="photo-destaque">
            <div
              className="card-img"
              style={{ backgroundImage: `url(${instagram4})` }}
            ></div>
          </div>
        </div>

        {!isProductsViewOpen && (
          <div className="middle">
            <p>NOSSOS FAVORITOS</p>
            <h3 className="title-middle">Destaques da Semana</h3>

            <div className="wrapper">
              {featuredProducts.map((product) => (
                <div key={product.id} className="one">
                  <div className="card-1">
                    <div className="status">{product.tag}</div>

                    <div className="img-card">
                      <img
                        className="img-wrapper"
                        src={product.image}
                        alt={product.name}
                      />
                    </div>

                    <div className="footer-card">
                      <h3 className="title-card">{product.name}</h3>

                      <a
                        href={getWhatsAppLink(product.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-link-product"
                      >
                        <h3 className="preco">
                          {product.price}
                          <MessageCircle className="icon-cards" />
                        </h3>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="ver-catalogo-link"
              onClick={() => handleCategorySelect("Todos")}
            >
              Ver catálogo completo
              <ArrowRight className="seta-cat" />
            </a>

            <div className="bar"></div>
          </div>
        )}

        {!isProductsViewOpen && (
          <div id="categorias-section" className="categorias">
            <div className="header-categorias">
              <div className="titulo-cat-wrapper">
                <h3 className="title-cat">Navegue por Categorias</h3>
                <p>Selecione uma categoria abaixo para ver os modelos.</p>
              </div>

              <a
                href="#"
                className="ver-tudo-btn"
                onClick={() => handleCategorySelect("Todos")}
              >
                Ver Tudo
                <ChevronRight className="arrow-cat" />
              </a>
            </div>

            <div className="wrapper-cat">
              {categories.map((cat, index) => (
                <div
                  key={index}
                  className={`card-cat card-${index + 1}`}
                  onClick={() => handleCategorySelect(cat.name)}
                >
                  <div className="card-1-cat">
                    <div className="img-card-cat">
                      <img
                        className="img-wrapper-cat"
                        src={cat.icon}
                        alt={`Ícone de ${cat.name}`}
                      />
                    </div>

                    <h3 className="title-card-cat">{cat.name}</h3>
                    <h3 className="desc-cat">{cat.desc}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {isProductsViewOpen && (
          <div
            id="selected-products-section"
            className="selected-products-section"
          >
            <div className="selected-products-header">
              <h2 className="title-selected">
                Catálogo:
                <span style={{ color: "rgb(255, 102, 172)" }}>
                  {selectedCategory === "Todos" ? "Completo" : selectedCategory}
                </span>
              </h2>

              <button className="close-view-btn" onClick={closeProductsView}>
                <X size={16} /> Fechar visualização
              </button>
            </div>

            <div className="products-grid">
              {productsToDisplay.length > 0 ? (
                productsToDisplay.map((product) => (
                  <div key={product.id} className="product-card">
                    <div className="status">{product.tag}</div>

                    <div className="img-card">
                      <img
                        className="img-wrapper"
                        src={product.image}
                        alt={product.name}
                      />
                    </div>

                    <div className="footer-card">
                      <h3 className="title-card">{product.name}</h3>

                      <a
                        href={getWhatsAppLink(product.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h3 className="preco">
                          {product.price}
                          <MessageCircle className="icon-cards" />
                        </h3>
                      </a>
                    </div>
                  </div>
                ))
              ) : (
                <p className="no-products-message">
                  Nenhum produto encontrado em{" "}
                  <strong>{selectedCategory}</strong>.
                </p>
              )}
            </div>
          </div>
        )}

        {/* Tutorial */}
        <div id="encomendas" className="tutorial">
          <div className="info">
            <h3 className="title-tut">Como encomendar sua peça</h3>
            <h3 className="descricao-tut">
              Um processo simples e transparente.
            </h3>

            <div className="steps">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="escolha">
                  <div className="card-escolha">
                    <img src={bolsa} alt="Ícone" />
                    <div>{step}</div>
                  </div>

                  <h3 className="title-escolha">
                    {step === 1
                      ? "1. Escolha"
                      : step === 2
                      ? "2. Personalize"
                      : step === 3
                      ? "3. Produção"
                      : "4. Entrega"}
                  </h3>

                  <h3 className="desc-escolha">
                    {step === 1
                      ? "Selecione o modelo ou traga sua inspiração."
                      : step === 2
                      ? "Defina cores, tamanhos e detalhes."
                      : step === 3
                      ? "Confeccionamos à mão com fios premium."
                      : "Receba em casa com cuidado especial."}
                  </h3>
                </div>
              ))}
            </div>

            <button
              className="btn-escolha"
              onClick={() =>
                handleWhatsAppClick("Olá, gostaria de solicitar um orçamento!")
              }
            >
              <MessageCircle size={17} /> Solicitar Orçamento
            </button>
          </div>
        </div>

        {/* Contato */}
        <div id="contato" className="contato">
          <div className="contato-content">
            <h3 className="title-contato">Transforme fios em sonhos</h3>
            <h3 className="desc-cont">
              Peças feitas à mão com cuidado e acabamento profissional.
            </h3>

            <button
              className="btn-contato"
              onClick={() =>
                handleWhatsAppClick("Olá, gostaria de falar sobre um pedido!")
              }
            >
              Fazer Pedido Agora
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-wrapper">
          <div className="topicos">
            <div className="one-topico">
              <img src={logo} alt="Logo" />
              <h3>Arte e Amor Artesanatos</h3>
            </div>

            <p className="desc-topicos">
              Artesanato com alma. Peças feitas à mão.
            </p>

            <div className="redes-footer">
              <div className="insta">
                <Instagram size={16} />
              </div>

              <div
                className="message"
                onClick={() =>
                  handleWhatsAppClick(
                    "Olá, entrei em contato pelo link do footer."
                  )
                }
              >
                <MessageCircle size={16} />
              </div>
            </div>
          </div>

          <div className="topicos">
            <div className="sub-topico">
              <h3>Navegação</h3>
            </div>

            <div className="sub-t">
              <a href="#">Início</a>
              <a href="#catalogo">Catálogo</a>
              <a href="#">Sobre a Artesã</a>
              <a href="#">Política de Envio</a>
            </div>
          </div>

          <div className="topicos">
            <div className="sub-topico">
              <h3>Coleções</h3>
            </div>

            <div className="sub-t">
              <a href="#">Moda Crochet</a>
              <a href="#">Decoração</a>
              <a href="#">Infantil</a>
              <a href="#">Promoções</a>
            </div>
          </div>

          <div className="topicos">
            <div className="sub-topico">
              <h3>Contato</h3>
            </div>

            <div className="sub-contato-wrapper">
              <div className="sub-contato">
                <div>
                  <MessageCircle className="icon-sub-contato" />
                  <a
                    href="https://wa.me/5511983199876?text=Olá!"
                    target="_blank"
                  >
                    <h3>(11) 99999-9999</h3>
                  </a>
                </div>
                <p>Seg a Sex, 9h às 18h</p>
              </div>

              <div className="sub-envio">
                <div>
                  <Truck className="icon-sub-contato" />
                  <h3>Enviamos para todo o Brasil</h3>
                </div>
                <p>São Paulo, SP</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bar-contato"></div>

        <div className="direitos">
          © 2024 Arte & Amor Artesanatos. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}

export default App;
