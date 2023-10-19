using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Net.Sockets;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading;
using System.Threading.Tasks;

namespace HttpRequester
{
    class Program
    {
        static Dictionary<string, int> SessionStore = new Dictionary<string, int>();

        static async Task Main(string[] args)
        {
            
            TcpListener tcpListener = new TcpListener(IPAddress.Loopback, 1234);
            tcpListener.Start();
            while (true)
            {
                TcpClient tcpClient = await tcpListener.AcceptTcpClientAsync();
#pragma warning disable CS4014 // Because this call is not awaited, execution of the current method continues before the call is completed
                Task.Run(() => ProcessClientAsync(tcpClient));
#pragma warning restore CS4014 // Because this call is not awaited, execution of the current method continues before the call is completed
            }
        } 

        private static async Task ProcessClientAsync(TcpClient tcpClient) 
        {
            const string NewLine = "\r\n";
            using NetworkStream networkStream = tcpClient.GetStream();
            byte[] requestBytes = new byte[1000000];// TODO: Use buffer
            int bytesRead = await networkStream.ReadAsync(requestBytes, 0, requestBytes.Length);
            string request = Encoding.UTF8.GetString(requestBytes, 0, bytesRead);

            var sid = Regex.Match(request, @"sid=[^\n]*\n").Value?.Replace("sid=", string.Empty).Trim();
            var newSid = Guid.NewGuid().ToString();
            var count = 0;
            if (SessionStore.ContainsKey(sid))
            {
                SessionStore[sid]++;
                count = SessionStore[sid];
            }
            else
            {
                sid = null;
                SessionStore[newSid] = 1;
                count = 1;
            }
            byte[] fileContent = File.ReadAllBytes("cat.jpg");
            //string responseText = "<h1>" + count  + "</h1>" + "<h1>" + DateTime.UtcNow + "</h1>";
            string headers = "HTTP/1.0 200 OK" + NewLine +
                              "Server: SoftUniServer/1.0" + NewLine + 
                              "Content-Type: image/jpeg" + NewLine +
                              //(string.IsNullOrWhiteSpace(sid) ?
                              //("Set-Cookie: sid=" + newSid + NewLine)
                              //: string.Empty) +
                              //"Set-Cookie: user=Niki; Max-Age=3600" + NewLine +
                              //"Set-Cookie: user=Niki; Expires=" + new DateTime(2022, 1, 1).ToString("R") + NewLine +
                              //"Set-Cookie: user=Niki; Path=/" + NewLine +
                              //"Set-Cookie: lang=bg; Path =/lang;" + NewLine +
                              //"Location: https://google.com/" + NewLine + // Redirects to Google if status code is set to 307.
                              // "Content-Disposition: attachment; filename=niki.html" + NewLine + // Downloads a file with request's body
                              "Content-Length: " + fileContent.Length + NewLine +
                              NewLine;
            byte[] headersBytes = Encoding.UTF8.GetBytes(headers);
            await networkStream.WriteAsync(headersBytes, 0, headersBytes.Length);
            await networkStream.WriteAsync(fileContent);
            // networkStream.Flush();
            // networkStream.Close();
            Console.WriteLine(request);
            Console.WriteLine(new string('=', 60));
        }
        //public static async Task HttpRequest()
        //{
        //    HttpClient client = new HttpClient();
        //    // client.DefaultRequestHeaders.Add("User-Agent", "MyConsoleBrowser/1.0");
        //    HttpResponseMessage response = await client.GetAsync("https://softuni.bg/");
        //    // HttpResponseMessage postResponse = await client.PostAsync("https://softuni.bg/", new FormUrlEncodedContent());
        //    string result = await response.Content.ReadAsStringAsync();
        //    File.WriteAllText("index.html", result);
        //}
    }
}