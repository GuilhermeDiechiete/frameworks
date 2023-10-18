# JOI

### Joi é uma biblioteca de validação de dados para JavaScript usada para verificar se os dados de entrada estão de acordo com os critérios estabelecidos, garantindo a integridade dos dados em um aplicativo.

1. string() // Valida se o valor é uma string.

2. number() // Valida se o valor é um número.

3. boolean() // Valida se o valor é um booleano.

4. date() // Valida se o valor é uma data.

5. array() // Valida se o valor é um array.

6. alternatives() // Valida se o valor corresponde a um dos vários esquemas possíveis.

7. object() // Valida se o valor é um objeto.

8. binary() // Valida se o valor é um buffer ou uma string de codificação base64.

9. func() // Valida se o valor é uma função.

10. symbol() // Valida se o valor é um símbolo.

11. link() // Valida se o valor é um link.

12. any() // Valida qualquer tipo de valor.

13. ref() // Cria uma referência a outro campo.

14. lazy() // Permite a definição de esquemas dependendo do estado atual do objeto.

15. array().items() // Valida se os elementos do array correspondem a um esquema específico.

16. array().length() // Valida o comprimento de um array.

17. object().keys() // Valida se um objeto tem chaves específicas.

18. object().length() // Valida o número de chaves em um objeto.

19. date().min() // Valida se a data está dentro de um intervalo específico.

20. date().max() // Valida se a data está dentro de um intervalo específico.

21. string().min() // Valida o comprimento mínimo de uma string.

22. string().max() // Valida o comprimento máximo de uma string.
23. string().alphanum() // Valida se uma string contém apenas caracteres alfanuméricos.
24. string().regex() // Valida se uma string corresponde a uma expressão regular específica.
25. string().email() // Valida se uma string é um endereço de e-mail válido.
26. string().isoDate() // Valida se uma string é uma data no formato ISO 8601.
27. string().ip() // Valida se uma string é um endereço IP válido.
28. string().uri() // Valida se uma string é uma URI válida.
29. number().integer() // Valida se um número é um número inteiro.
30. number().positive() // Valida se um número é positivo.
31. number().negative() // Valida se um número é negativo.
32. number().precision() // Valida a precisão de um número de ponto flutuante.
33. number().greater() // Valida se um número é maior que um determinado valor.
34. number().less() // Valida se um número é menor que um determinado valor.
35. number().multiple() // Valida se um número é um múltiplo de um determinado valor.
36. number().port() // Valida se um número é uma porta de rede válida.
37. number().unsafe() // Permite números que podem ter problemas de precisão de ponto flutuante.
38. alternatives().try() // Permite validar se o valor corresponde a um dos esquemas fornecidos.
39. alternatives().when() // Permite definir regras de validação condicionais com base em outras entradas.
40. alternatives().conditional() // Permite definir regras de validação condicionais com base em outras entradas com sintaxe alternativa.
41. alternatives().switch() // Permite criar uma condição switch para validação.
42. alternatives().case() // Define um caso dentro de uma declaração de switch para validação.
43. alternatives().match() // Valida se o valor corresponde a um dos casos especificados.
44. alternatives().otherwise() // Define o caso padrão dentro de uma declaração switch para validação.
45. string().token() // Valida se uma string é um token.
46. string().hostname() // Valida se uma string é um nome de host válido.
47. string().guid() // Valida se uma string é um identificador global único (GUID).
48. string().hex() // Valida se uma string é um número hexadecimal.
49. string().base64() // Valida se uma string é codificada em base64.
50. string().dataUri() // Valida se uma string é uma URI de dados.
51. string().creditCard() // Valida se uma string é um número de cartão de crédito.
52. string().uuid() // Valida se uma string é um identificador único universal (UUID).
53. string().alphanum().min() // Valida se uma string alfanumérica tem um comprimento mínimo.
54. string().alphanum().max() // Valida se uma string alfanumérica tem um comprimento máximo.
55. string().alphanum().length() // Valida se uma string alfanumérica tem um comprimento específico.
56. string().regex().min() // Valida se uma string que corresponde a uma expressão regular tem um comprimento mínimo.
57. string().regex().max() // Valida se uma string que corresponde a uma expressão regular tem um comprimento máximo.
58. string().regex().length() // Valida se uma string que corresponde a uma expressão regular tem um comprimento específico.
59. number().integer().min() // Valida se um número inteiro tem um valor mínimo.
60. number().integer().max() // Valida se um número inteiro tem um valor máximo.
61. number().precision().less() // Valida se um número de ponto flutuante tem uma precisão menor que um valor específico.
62. number().precision().greater() // Valida se um número de ponto flutuante tem uma precisão maior que um valor específico.
63. required() // Indica que o campo é obrigatório e deve estar presente nos dados de entrada.
64. presence() // Permite especificar as regras de presença para um esquema, incluindo 'required', 'optional'  'forbidden'.