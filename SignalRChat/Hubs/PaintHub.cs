using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SignalRChat.Hubs
{
    public class PaintHub : Hub
    {
        public async Task SendCoordinates(int x, int y)
        {
            await Clients.Others.SendAsync("GetCoordinates", x, y);
        }
    }
}
