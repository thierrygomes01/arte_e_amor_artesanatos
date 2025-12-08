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
  CircleAlert,
  Handbag,
  CreditCard,
} from "lucide-react";

import {
  logo,
  coracao,
  guirlandaBranca,
  guirlandaVerde,
  guirlandaVerdeClaro,
  guirlandaVerde2,
  vestido,
  casa,
  prato,
  bolsa,
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
    const phoneNumber = "5511954892613";
    const message = encodeURIComponent(
      `Olá, gostaria de saber mais sobre o produto: ${productName}.`
    );
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  const handleWhatsAppClick = (
    contextMessage = "Olá, gostaria de fazer um pedido!"
  ) => {
    const phoneNumber = "5511954892613";
    const message = encodeURIComponent(contextMessage);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const steps = [
    {
      id: 1,
      icon: <Handbag size={35} color=" var(--color-primary-dark)" />,
      title: "Escolha",
      description: "Navegue pelo catálogo e escolha sua peça favorita.",
    },
    {
      id: 2,
      icon: <MessageCircle size={35} color=" var(--color-primary-dark)" />,
      title: "Disponibilidade",
      description:
        "Chame no WhatsApp para confirmar se ainda temos no estoque.",
    },
    {
      id: 3,
      icon: <CreditCard size={35} color=" var(--color-primary-dark)" />,
      title: "Pagamento",
      description: "Realize o pagamento via Pix ou Cartão para reservar.",
    },
    {
      id: 4,
      icon: <Truck size={35} color=" var(--color-primary-dark)" />,
      title: "Entrega SP",
      description: "Receba com carinho (Apenas Cidade de São Paulo).",
    },
  ];

  const allProducts = [
    {
      id: 1,
      name: "Guirlanda de Natal",
      price: "R$ 80,00",
      image: guirlandaBranca,
      tag: "Decoração",
      category: "Decoração",
    },
    {
      id: 2,
      name: "Guirlanda de Natal",
      price: "R$ 80,00",
      image: guirlandaVerde,
      tag: "Decoração",
      category: "Decoração",
    },
    {
      id: 3,
      name: "Guirlanda de Natal",
      price: "R$ 80,00",
      image: guirlandaVerdeClaro,
      tag: "Decoração",
      category: "Decoração",
    },
    {
      id: 5,
      name: "Guirlanda de Natal",
      price: "R$ 80,00",
      image: guirlandaVerde2,
      tag: "Decoração",
      category: "Decoração",
    },
  ];

  const featuredProducts = allProducts.slice(0, 4);

  const categories = [
    { name: "Roupas", icon: vestido, desc: "Tops, saias e vestidos leves" },
    { name: "Decoração", icon: casa, desc: "Cestos, tapetes e mantas" },
    { name: "Mesa Posta", icon: prato, desc: "Sousplat e caminhos de mesa" },
    { name: "Acessórios", icon: bolsa, desc: "Bolsas e chapéus exclusivos" },
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
          <a
            className="btn-instagram"
            href="https://www.instagram.com/arte.eamorartesanatos/"
            target="blank"
          >
            <Instagram className="icon-instagram" size={20} />
          </a>

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

      <div className="aviso">
        <div className="icon-aviso">
          <CircleAlert className="alert" />
        </div>
        Atenção: Entregas realizadas exclusivamente na Cidade de São Paulo.
      </div>

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
                PRONTA ENTREGA
              </p>
            </div>

            <h1>
              Crochê feito à mão com <span>carinho</span> e alma.
            </h1>

            <p>
              Peças exclusivas e acabamento impecável. Trabalhamos apenas com
              peças a pronta entrega para você não precisar esperar.
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
                <MessageCircle className="btn-dest-enco" size={17} /> Fazer
                Pedido
              </button>
            </div>
          </div>

          <div className="photo-destaque">
            <div
              className="card-img"
              style={{ backgroundImage: `url(${guirlandaBranca})` }}
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

        <div id="encomendas" className="tutorial">
          <div className="info">
            <h3 className="title-tut">Como encomendar sua peça</h3>
            <h3 className="descricao-tut">
              Um processo simples e transparente.
            </h3>

            <div className="steps">
              {steps.map((step) => (
                <div key={step.id} className="escolha">
                  <div className="card-escolha">
                    {step.icon}
                    <div>{step.id}</div>
                  </div>

                  <h3 className="title-escolha">{`${step.id}. ${step.title}`}</h3>
                  <h3 className="desc-escolha">{step.description}</h3>
                </div>
              ))}
            </div>

            <button
              className="btn-escolha"
              onClick={() =>
                handleWhatsAppClick("Olá, gostaria de fazer um pedido!")
              }
            >
              <MessageCircle size={17} /> Fazer Pedido
            </button>
          </div>
        </div>

        <div id="contato" className="contato">
          <div className="contato-content">
            <h3 className="title-contato">Transforme fios em sonhos</h3>
            <h3 className="desc-cont">
              Peças únicas esperando por você. Não deixe para depois, nosso
              estoque é limitado!
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
              <a href="#">Roupas</a>
              <a href="#">Decoração</a>
              <a href="#">Mesa Posta</a>
              <a href="#">Acessórios</a>
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
                    href="https://wa.me/5511954892613?text=Olá!"
                    target="_blank"
                  >
                    <h3>(11) 95489-2613</h3>
                  </a>
                </div>
                <p>Seg a Sex, 9h às 18h</p>
              </div>

              <div className="sub-envio">
                <div>
                  <Truck className="icon-sub-contato" />
                  <h3>Enviamos para toda a cidade de SP</h3>
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
