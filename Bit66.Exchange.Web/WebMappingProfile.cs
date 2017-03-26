using System.Linq;
using AutoMapper;
using Bit66.Exchange.Dao;
using Bit66.Exchange.Services.Dto;
using Bit66.Exchange.Web.Models;

namespace Bit66.Exchange.Web
{
    public class WebMappingProfile : Profile
    {
        public override string ProfileName { get; } = "WebMappingProfile";

        public WebMappingProfile()
        {
            CreateMap<NewExchangeItemModel, ExchangeItemsGroupDto>();
        }
    }
}