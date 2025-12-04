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

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Destaques");
  const [isProductsViewOpen, setIsProductsViewOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");

      if (window.scrollY > 10) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleCategorySelect = (categoryName) => {
    setSelectedCategory(categoryName);
    setIsProductsViewOpen(true);
    closeMenu();

    setTimeout(() => {
      const section = document.getElementById("selected-products-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const closeProductsView = () => {
    setSelectedCategory("Destaques");
    setIsProductsViewOpen(false);

    setTimeout(() => {
      const categoriesSection = document.getElementById("categorias-section");
      if (categoriesSection) {
        categoriesSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  const getWhatsAppLink = (productName) => {
    const phoneNumber = "5511946618067";
    const message = encodeURIComponent(
      `Olá, gostaria de saber mais sobre o produto: ${productName}. Poderia me dar mais detalhes?`
    );
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  // ⭐️ NOVO: Função para o clique genérico do WhatsApp
  const handleWhatsAppClick = (
    contextMessage = "Olá, gostaria de fazer um pedido ou saber mais sobre os produtos."
  ) => {
    const phoneNumber = "5511946618067"; // Seu número de telefone
    const message = encodeURIComponent(contextMessage);
    const link = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(link, "_blank"); // Abre em uma nova aba
  };

  const allProducts = [
    {
      id: 1,
      name: "Cropped Boho Chic",
      price: "R$ 129,90",
      image: "./src/assets/imagens-produtos/instagram-4.png",
      tag: "Mais Vendido",
      category: "Roupas",
    },
    {
      id: 2,
      name: "Bolsa de Praia Natural",
      price: "R$ 189,90",
      image: "./src/assets/imagens-produtos/instagram-4.png",
      tag: "Lançamento",
      category: "Acessórios",
    },
    {
      id: 3,
      name: "Kit Mesa Posta (4 un)",
      price: "R$ 149,90",
      image: "./src/assets/imagens-produtos/instagram-4.png",
      tag: "Personalizável",
      category: "Mesa Posta",
    },
    {
      id: 4,
      name: "Amigurumi Ursinho",
      price: "Sob Consulta",
      image: "./src/assets/imagens-produtos/instagram-4.png",
      tag: "Infantil",
      category: "Amigurumis",
    },
    {
      id: 5,
      name: "Tapete Redondo Sala",
      price: "R$ 299,90",
      image: "./src/assets/imagens-produtos/instagram-4.png",
      tag: "Decoração",
      category: "Decoração",
    },
    {
      id: 6,
      name: "Cesto Organizador",
      price: "R$ 89,90",
      image: "./src/assets/imagens-produtos/instagram-4.png",
      tag: "Decoração",
      category: "Decoração",
    },
    {
      id: 7,
      name: "Saída de Praia Longa",
      price: "R$ 219,90",
      image: "./src/assets/imagens-produtos/instagram-4.png",
      tag: "Verão",
      category: "Roupas",
    },
    {
      id: 8,
      name: "Polvo Amigurumi",
      price: "R$ 120,00",
      image: "./src/assets/imagens-produtos/instagram-4.png",
      tag: "Infantil",
      category: "Amigurumis",
    },
  ];

  const featuredProducts = allProducts.slice(0, 4);

  const categories = [
    {
      name: "Roupas",
      icon: "./src/assets/icons/vestido.png",
      desc: "Tops, saias e vestidos leves",
    },
    {
      name: "Decoração",
      icon: "./src/assets/icons/casa.png",
      desc: "Cestos, tapetes e mantas",
    },
    {
      name: "Mesa Posta",
      icon: "./src/assets/icons/prato.png",
      desc: "Sousplat e caminhos de mesa",
    },
    {
      name: "Amigurumis",
      icon: "./src/assets/icons/urso.png",
      desc: "Bichinhos feitos com amor",
    },
    {
      name: "Acessórios",
      icon: "./src/assets/icons/bolsa.png",
      desc: "Bolsas e chapéus exclusivos",
    },
    {
      name: "Encomendas",
      icon: "./src/assets/icons/estrela.png",
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
          <img src="./src/assets/Logo.png" alt="Logo Arte e Amor Artesanatos" />
        </div>
        <nav className="menu desktop-menu">
          <a href="#catalogo">
            <p>Catálogo</p>
          </a>
          <a href="#encomendas">
            <p>Encomendas</p>
          </a>
          <a href="#">
            <p>Sobre</p>
          </a>
          <a href="#contato">
            <p>Contato</p>
          </a>
        </nav>
        <div className="contato-header">
          <Instagram className="icon-instagram" size={20} />
          {/* ⭐️ WHATSAPP: Botão do Header */}
          <div
            className="contato-button"
            onClick={() =>
              handleWhatsAppClick("Olá, gostaria de fazer um pedido!")
            }
            style={{ cursor: "pointer" }}
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
        {/* ⭐️ WHATSAPP: Botão do Menu Mobile */}
        <button
          className="btn-menu-hamb"
          onClick={() =>
            handleWhatsAppClick(
              "Olá, vi o site e gostaria de conversar sobre os produtos!"
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
              <img src="./src/assets/coracao.png" alt="Coração" />
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
              Peças exclusivas, acabamento impecável e encomendas
              <br />
              sob medida para vestir você e sua casa com aconchego.
            </p>
            <div className="buttons-destaque">
              <button
                className="btn-cat"
                onClick={() => handleCategorySelect("Todos")}
              >
                Ver Catálogo
              </button>
              {/* ⭐️ WHATSAPP: Botão Encomendar Destaque */}
              <button
                className="btn-enc"
                onClick={() =>
                  handleWhatsAppClick(
                    "Olá, gostaria de fazer uma encomenda personalizada!"
                  )
                }
              >
                <span>
                  <MessageCircle size={17} />
                </span>
                Encomendar
              </button>
            </div>
          </div>
          <div className="photo-destaque">
            <div className="card-img"></div>
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
                      {/* ESTE JÁ TINHA: Link específico do produto */}
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
                <p>
                  Selecione uma categoria abaixo para ver os modelos
                  disponíveis.
                </p>
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
                  style={{ cursor: "pointer" }}
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
                <X size={16} style={{ marginRight: "5px" }} /> Fechar
                visualização
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
                      {/* ESTE JÁ TINHA: Link específico do produto */}
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
                ))
              ) : (
                <p className="no-products-message">
                  Nenhum produto encontrado na categoria
                  <span style={{ fontWeight: "bold" }}>{selectedCategory}</span>
                  . Experimente outra categoria.
                </p>
              )}
            </div>
          </div>
        )}
        <div id="encomendas" className="tutorial">
          <div className="info">
            <h3 className="title-tut">Como encomendar sua peça</h3>
            <h3 className="descricao-tut">
              Um processo simples e transparente, feito para você.
            </h3>
            <div className="steps">
              <div className="escolha">
                <div className="card-escolha">
                  <img
                    src="./src/assets/icons/bolsa.png"
                    alt="Ícone de escolha"
                  />
                  <div>1</div>
                </div>
                <h3 className="title-escolha">1. Escolha</h3>
                <h3 className="desc-escolha">
                  Selecione o modelo ou traga sua inspiração.
                </h3>
              </div>
              <div className="escolha">
                <div className="card-escolha">
                  <img
                    src="./src/assets/icons/bolsa.png"
                    alt="Ícone de personalização"
                  />
                  <div>2</div>
                </div>
                <h3 className="title-escolha">2. Personalize</h3>
                <h3 className="desc-escolha">
                  Defina cores, tamanhos e detalhes conosco.
                </h3>
              </div>
              <div className="escolha">
                <div className="card-escolha">
                  <img
                    src="./src/assets/icons/bolsa.png"
                    alt="Ícone de produção"
                  />
                  <div>3</div>
                </div>
                <h3 className="title-escolha">3. Produção</h3>
                <h3 className="desc-escolha">
                  Confeccionamos à mão com fios premium
                </h3>
              </div>
              <div className="escolha">
                <div className="card-escolha">
                  <img
                    src="./src/assets/icons/bolsa.png"
                    alt="Ícone de entrega"
                  />
                  <div>4</div>
                </div>
                <h3 className="title-escolha">4. Entrega</h3>
                <h3 className="desc-escolha">
                  Receba em casa com embalagem perfumada.
                </h3>
              </div>
            </div>
            {/* ⭐️ WHATSAPP: Botão Solicitar Orçamento */}
            <button
              className="btn-escolha"
              onClick={() =>
                handleWhatsAppClick(
                  "Olá, gostaria de solicitar um orçamento para uma peça personalizada!"
                )
              }
            >
              <MessageCircle className="escolha-icon" size={17} />
              Solicitar Orçamento
            </button>
          </div>
        </div>
        <div id="contato" className="contato">
          <div className="contato-content">
            <h3 className="title-contato">Transforme fios em sonhos</h3>
            <h3 className="desc-cont">
              Cada peça é feita à mão, com cuidado e acabamento profissional.
              Personalize cores, tamanhos e modelos do seu jeito.
            </h3>
            {/* ⭐️ WHATSAPP: Botão Fazer Pedido Agora Contato */}
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
      <footer className="footer">
        <div className="footer-wrapper">
          <div className="topicos">
            <div className="one-topico">
              <img src="./src/assets/Logo.png" alt="Logo Arte e Amor" />
              <h3>Arte e Amor Artesanatos</h3>
            </div>
            <p className="desc-topicos">
              Artesanato com alma. Peças exclusivas feitas à mão para trazer
              mais cor e afeto para o seu dia a dia.
            </p>
            <div className="redes-footer">
              <div className="insta">
                <Instagram size={16} />
              </div>
              {/* ⭐️ WHATSAPP: Botão de ícone no Footer (Recomendado usar a tag <a> com o link direto aqui, mas vou usar a div para manter a estrutura) */}
              <div
                className="message"
                onClick={() =>
                  handleWhatsAppClick(
                    "Olá, entrei em contato pelo link do footer."
                  )
                }
                style={{ cursor: "pointer" }}
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
              <a href="#">
                <p>Início</p>
              </a>
              <a href="#catalogo">
                <p>Catálogo</p>
              </a>
              <a href="#">
                <p>Sobre a Artesã</p>
              </a>
              <a href="#">
                <p>Politica de Envio</p>
              </a>
            </div>
          </div>
          <div className="topicos">
            <div className="sub-topico">
              <h3>Coleções</h3>
            </div>
            <div className="sub-t">
              <a href="#">
                <p>Moda Crochet</p>
              </a>
              <a href="#">
                <p>Decoração</p>
              </a>
              <a href="#">
                <p>Infantil</p>
              </a>
              <a href="#">
                <p>Promoções</p>
              </a>
            </div>
          </div>
          <div className="topicos">
            <div className="sub-topico">
              <h3>Contato</h3>
            </div>
            <div className="sub-contato-wrapper">
              <div className="sub-contato">
                <div>
                  {/* ⭐️ WHATSAPP: Link no número de telefone para celular */}
                  <MessageCircle className="icon-sub-contato" />
                  <a
                    href="https://wa.me/5511946618067?text=Olá, gostaria de falar com a Arte e Amor Artesanatos!"
                    target="_blank"
                    rel="noopener noreferrer"
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
