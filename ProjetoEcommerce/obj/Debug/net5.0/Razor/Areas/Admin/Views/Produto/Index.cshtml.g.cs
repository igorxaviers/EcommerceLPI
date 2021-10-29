#pragma checksum "C:\projetos\ecommerce-drive\ProjetoEcommerce\Areas\Admin\Views\Produto\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "6dc6219af6973bfb4bc04e9875b93876a7eea1b5"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Areas_Admin_Views_Produto_Index), @"mvc.1.0.view", @"/Areas/Admin/Views/Produto/Index.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"6dc6219af6973bfb4bc04e9875b93876a7eea1b5", @"/Areas/Admin/Views/Produto/Index.cshtml")]
    public class Areas_Admin_Views_Produto_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/views/produto/index.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        #line hidden
        #pragma warning disable 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        #pragma warning restore 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 1 "C:\projetos\ecommerce-drive\ProjetoEcommerce\Areas\Admin\Views\Produto\Index.cshtml"
  
    ViewData["Title"] = "Cadastro de Produto";
    Layout = "~/Views/Shared/_LayoutAdmin.cshtml";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n");
            DefineSection("Scripts", async() => {
                WriteLiteral("\r\n    ");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "6dc6219af6973bfb4bc04e9875b93876a7eea1b53352", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                WriteLiteral("\r\n");
            }
            );
            WriteLiteral(@"<div class=""card o-hidden border-0 shadow-lg"">
    <div class=""card-body p-0"">
        <div class=""row"">
            <div class=""col-lg-6"">
                <div class=""p-5"">
                    <div class=""text-left"">
                        <h1 class=""h4 text-gray-900 mb-4"">Cadastro de Produto</h1>
                    </div>
                    <form class=""user"" id=""form-produto"">
                        <div class=""form-group"">
                            <input type=""text"" name=""id"" class=""form-control"" placeholder=""Id"" disabled>
                        </div>
                        <div class=""form-group"">
                            <label>Nome do produto</label>
                            <input type=""text"" name=""nome"" class=""form-control"" placeholder=""Nome do produto"" required>
                        </div>
                        <div class=""form-group"">
                            <label>Preço do produto</label>
                            <input type=""number"" name=""preco"" class");
            WriteLiteral(@"=""form-control"" placeholder=""Preço"" required>
                        </div>
                        <div class=""form-group"">
                            <label>Estoque do produto</label>
                            <input type=""number"" name=""estoque"" class=""form-control"" placeholder=""Estoque"" required>
                        </div>
                        <div>
                            <label>Categoria do produto</label>
                            <select class=""form-select"" name=""categoria"">
                                <option selected disabled hidden>Selecione uma opção</option>
                                <option value=""Hardware"">Hardware</option>
                                <option value=""Periféricos"">Periféricos</option>
                                <option value=""Notebooks"">Notebooks</option>
                                <option value=""Cadeiras/Mesas"">Cadeiras/Mesas</option>
                                <option value=""Monitores"">Monitores</option>
              ");
            WriteLiteral(@"              </select>
                        </div>

                        <button type=""button"" onclick=""indexProd.cadastrar()"" class=""btn btn-primary w-100 mt-5"">Cadastrar Produto</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591
