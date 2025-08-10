$(document).ready(function() {
            $('#carousel-imagens').slick( {
                autoplay: true
            })

            $('#tel-number').mask('(00) 00000-0000', {
                placeholder: '(00) 12345-6789'
            })

            $('form').validate( {
                rules: {
                    name: {
                        required: true
                    },
                    email: {
                        required: true
                    },
                    tel: {
                        required: true
                    },
                    message: {
                        required: true
                    }
                },
                messages: {
                    name: 'Insira seu nome',
                    email: 'Insira um E-mail válido',
                    tel: 'Insira seu número de telefone',
                    message: 'Adicione uma mensagem'
                }
            })
        })